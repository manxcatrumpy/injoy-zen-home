import { useState, useRef, useCallback, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Reset zoom when this value changes (e.g. page index) */
  resetKey?: string | number;
  onLoad?: () => void;
  isLoading?: boolean;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.5;
const DOUBLE_TAP_DELAY = 300;
const DOUBLE_TAP_ZOOM = 2.5;

export function ZoomableImage({
  src,
  alt,
  className,
  resetKey,
  onLoad,
  isLoading,
}: ZoomableImageProps) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Pan state
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const lastTranslate = useRef({ x: 0, y: 0 });

  // Pinch state
  const lastPinchDist = useRef<number | null>(null);
  const pinchMidpoint = useRef({ x: 0, y: 0 });

  // Double-tap detection
  const lastTapTime = useRef(0);

  // Reset zoom when page changes
  useEffect(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    lastTranslate.current = { x: 0, y: 0 };
  }, [resetKey]);

  const isZoomed = scale > 1;

  /** Clamp translation so the image doesn't leave the viewport */
  const clampTranslate = useCallback(
    (tx: number, ty: number, s: number) => {
      if (s <= 1) return { x: 0, y: 0 };
      const container = containerRef.current;
      const img = imgRef.current;
      if (!container || !img) return { x: tx, y: ty };

      const cRect = container.getBoundingClientRect();
      // Use the displayed (object-contain) size, not natural size
      const imgDisplayW = Math.min(img.naturalWidth * (cRect.height / img.naturalHeight), cRect.width);
      const imgDisplayH = Math.min(img.naturalHeight * (cRect.width / img.naturalWidth), cRect.height);

      const maxX = Math.max(0, (imgDisplayW * s - cRect.width) / 2);
      const maxY = Math.max(0, (imgDisplayH * s - cRect.height) / 2);

      return {
        x: Math.max(-maxX, Math.min(maxX, tx)),
        y: Math.max(-maxY, Math.min(maxY, ty)),
      };
    },
    []
  );

  const applyZoom = useCallback(
    (newScale: number, pivotX?: number, pivotY?: number) => {
      const clamped = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
      if (clamped === 1) {
        setScale(1);
        setTranslate({ x: 0, y: 0 });
        lastTranslate.current = { x: 0, y: 0 };
        return;
      }

      // If pivot provided, adjust translate so the zoom anchors to that point
      if (pivotX !== undefined && pivotY !== undefined && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const cx = pivotX - rect.left - rect.width / 2;
        const cy = pivotY - rect.top - rect.height / 2;
        const ratio = 1 - clamped / scale;
        const newTx = translate.x + cx * ratio;
        const newTy = translate.y + cy * ratio;
        const clampedT = clampTranslate(newTx, newTy, clamped);
        setTranslate(clampedT);
        lastTranslate.current = clampedT;
      } else {
        const clampedT = clampTranslate(translate.x, translate.y, clamped);
        setTranslate(clampedT);
        lastTranslate.current = clampedT;
      }

      setScale(clamped);
    },
    [scale, translate, clampTranslate]
  );

  // --- Wheel zoom ---
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      applyZoom(scale + delta, e.clientX, e.clientY);
    },
    [scale, applyZoom]
  );

  // --- Mouse pan (desktop drag) ---
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!isZoomed) return;
      e.preventDefault();
      isPanning.current = true;
      panStart.current = { x: e.clientX, y: e.clientY };
      lastTranslate.current = { ...translate };
    },
    [isZoomed, translate]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isPanning.current) return;
      const dx = e.clientX - panStart.current.x;
      const dy = e.clientY - panStart.current.y;
      const newT = clampTranslate(
        lastTranslate.current.x + dx,
        lastTranslate.current.y + dy,
        scale
      );
      setTranslate(newT);
    },
    [scale, clampTranslate]
  );

  const handleMouseUp = useCallback(() => {
    if (isPanning.current) {
      isPanning.current = false;
      lastTranslate.current = { ...translate };
    }
  }, [translate]);

  // --- Touch: pinch-to-zoom + pan + double-tap ---
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        // Start pinch
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastPinchDist.current = Math.hypot(dx, dy);
        pinchMidpoint.current = {
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        };
        isPanning.current = false;
      } else if (e.touches.length === 1) {
        // Double-tap detection
        const now = Date.now();
        if (now - lastTapTime.current < DOUBLE_TAP_DELAY) {
          // Double-tap: toggle zoom
          e.preventDefault();
          if (isZoomed) {
            applyZoom(1);
          } else {
            applyZoom(DOUBLE_TAP_ZOOM, e.touches[0].clientX, e.touches[0].clientY);
          }
          lastTapTime.current = 0;
          return;
        }
        lastTapTime.current = now;

        // Start pan (only when zoomed)
        if (isZoomed) {
          isPanning.current = true;
          panStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          lastTranslate.current = { ...translate };
        }
      }
    },
    [isZoomed, translate, applyZoom]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        // Pinch zoom
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);

        if (lastPinchDist.current !== null) {
          const ratio = dist / lastPinchDist.current;
          const newScale = scale * ratio;
          applyZoom(newScale, pinchMidpoint.current.x, pinchMidpoint.current.y);
        }
        lastPinchDist.current = dist;
      } else if (e.touches.length === 1 && isPanning.current && isZoomed) {
        // Pan
        e.preventDefault();
        const dx = e.touches[0].clientX - panStart.current.x;
        const dy = e.touches[0].clientY - panStart.current.y;
        const newT = clampTranslate(
          lastTranslate.current.x + dx,
          lastTranslate.current.y + dy,
          scale
        );
        setTranslate(newT);
      }
    },
    [scale, isZoomed, applyZoom, clampTranslate]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length < 2) {
        lastPinchDist.current = null;
      }
      if (e.touches.length === 0) {
        isPanning.current = false;
        lastTranslate.current = { ...translate };
      }
    },
    [translate]
  );

  // Button handlers
  const zoomIn = () => applyZoom(scale + ZOOM_STEP);
  const zoomOut = () => applyZoom(scale - ZOOM_STEP);
  const resetZoom = () => applyZoom(1);

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Image area */}
      <div
        ref={containerRef}
        className={cn(
          "flex-1 relative overflow-hidden flex items-center justify-center min-h-0",
          isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
        )}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-10 h-10 border-4 border-zen-green/30 border-t-zen-green rounded-full animate-spin" />
          </div>
        )}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={cn(
            "max-w-full max-h-full object-contain shadow-2xl select-none transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            transformOrigin: "center center",
            willChange: isZoomed ? "transform" : "auto",
            transition: isPanning.current ? "none" : "transform 0.2s ease-out",
          }}
          onLoad={onLoad}
          draggable={false}
        />
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1 shadow-lg z-30">
        <button
          onClick={zoomOut}
          disabled={scale <= MIN_SCALE}
          className="p-1.5 rounded-full hover:bg-zen-green/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          aria-label="縮小"
        >
          <ZoomOut size={18} className="text-zen-green" />
        </button>
        <span className="text-xs text-zen-green font-medium min-w-[3ch] text-center select-none">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          className="p-1.5 rounded-full hover:bg-zen-green/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          aria-label="放大"
        >
          <ZoomIn size={18} className="text-zen-green" />
        </button>
        {isZoomed && (
          <button
            onClick={resetZoom}
            className="p-1.5 rounded-full hover:bg-zen-green/10 transition-colors cursor-pointer"
            aria-label="重設縮放"
          >
            <RotateCcw size={16} className="text-zen-green" />
          </button>
        )}
      </div>
    </div>
  );
}
