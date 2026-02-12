import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ZoomableImage } from "@/components/ZoomableImage";

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] h-[95vh] p-0 bg-zen-beige/95 backdrop-blur-sm border-none overflow-hidden flex flex-col"
      >
        <VisuallyHidden>
          <DialogTitle>菜單</DialogTitle>
        </VisuallyHidden>

        {/* Main Image Container - Flexible Height */}
        <div className="flex-1 relative px-12 min-h-0">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-zen-green shadow-lg transition-all hover:scale-105 cursor-pointer"
            aria-label="上一頁"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Zoomable Image */}
          <ZoomableImage
            src={menuPages[currentPage]}
            alt={`菜單第 ${currentPage + 1} 頁`}
            resetKey={currentPage}
            isLoading={isLoading}
            onLoad={() => setIsLoading(false)}
          />

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-zen-green shadow-lg transition-all hover:scale-105 cursor-pointer"
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
