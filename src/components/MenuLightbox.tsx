import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import menu page images
import menuPage01 from "@/assets/menu-pages/menu-page-01.png";
import menuPage02 from "@/assets/menu-pages/menu-page-02.png";
import menuPage03 from "@/assets/menu-pages/menu-page-03.png";
import menuPage04 from "@/assets/menu-pages/menu-page-04.png";
import menuPage05 from "@/assets/menu-pages/menu-page-05.png";
import menuPage06 from "@/assets/menu-pages/menu-page-06.png";
import menuPage07 from "@/assets/menu-pages/menu-page-07.png";
import menuPage08 from "@/assets/menu-pages/menu-page-08.png";
import menuPage09 from "@/assets/menu-pages/menu-page-09.png";
import menuPage10 from "@/assets/menu-pages/menu-page-10.png";
import menuPage11 from "@/assets/menu-pages/menu-page-11.png";
import menuPage12 from "@/assets/menu-pages/menu-page-12.png";
import menuPage13 from "@/assets/menu-pages/menu-page-13.png";
import menuPage14 from "@/assets/menu-pages/menu-page-14.png";

const menuPages = [
  menuPage01,
  menuPage02,
  menuPage03,
  menuPage04,
  menuPage05,
  menuPage06,
  menuPage07,
  menuPage08,
  menuPage09,
  menuPage10,
  menuPage11,
  menuPage12,
  menuPage13,
  menuPage14,
];

interface MenuLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialPage?: number;
}

export function MenuLightbox({
  open,
  onOpenChange,
  initialPage = 0,
}: MenuLightboxProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Reset to initial page when opening
  useEffect(() => {
    if (open) {
      setCurrentPage(initialPage);
      setIsLoading(true);
    }
  }, [open, initialPage]);

  const goToPrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : menuPages.length - 1));
  }, []);

  const goToNext = useCallback(() => {
    setIsLoading(true);
    setCurrentPage((prev) => (prev < menuPages.length - 1 ? prev + 1 : 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, goToPrevious, goToNext, onOpenChange]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStart(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] h-[95vh] p-0 bg-zen-beige/95 backdrop-blur-sm border-none overflow-hidden flex flex-col"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <VisuallyHidden>
          <DialogTitle>菜單</DialogTitle>
        </VisuallyHidden>

        {/* Main Image Container - Flexible Height */}
        <div className="flex-1 relative flex items-center justify-center px-12 min-h-0">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 z-40 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-zen-green shadow-lg transition-all hover:scale-105 cursor-pointer"
            aria-label="上一頁"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-zen-green/30 border-t-zen-green rounded-full animate-spin" />
              </div>
            )}
            <img
              src={menuPages[currentPage]}
              alt={`菜單第 ${currentPage + 1} 頁`}
              className={cn(
                "max-w-full max-h-full object-contain shadow-2xl transition-opacity duration-300",
                isLoading ? "opacity-0" : "opacity-100"
              )}
              onLoad={() => setIsLoading(false)}
              draggable={false}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 z-40 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-zen-green shadow-lg transition-all hover:scale-105 cursor-pointer"
            aria-label="下一頁"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Bottom Bar - Fixed Height */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2 py-3">
          {/* Page Number */}
          <div className="px-4 py-1.5 bg-white/90 rounded-full text-zen-green text-sm font-medium shadow">
            {currentPage + 1} / {menuPages.length}
          </div>

          {/* Thumbnail Dots */}
          <div className="flex items-center gap-1.5 px-4">
            {menuPages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsLoading(true);
                  setCurrentPage(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all cursor-pointer",
                  index === currentPage
                    ? "bg-zen-green w-4"
                    : "bg-zen-green/30 hover:bg-zen-green/50"
                )}
                aria-label={`跳至第 ${index + 1} 頁`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
