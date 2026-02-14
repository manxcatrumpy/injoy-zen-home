import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import logoWithChar from "@/assets/injoy_logo_with_char.png?w=400&format=webp";

const navItems = [
  { label: "首頁", href: "/", isRoute: true },
  { label: "關於悦納", href: "/about", isRoute: true },
  { label: "餐飲體驗", href: "/dining", isRoute: true },
  { label: "人文空間", href: "/space", isRoute: true },
  { label: "生活美學", href: "/life", isRoute: true },
  { label: "優質選物", href: "/shop", isRoute: true },
  { label: "交通資訊", href: "/location", isRoute: true },
];

// Custom hook for anchor navigation that works across pages
const useAnchorNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!isHomePage) {
      e.preventDefault();
      // Navigate to home page with hash
      navigate("/" + href);
    }
    // If on home page, let the default anchor behavior work
  };

  return { handleAnchorClick, isHomePage };
};

// Focus trap hook for mobile menu accessibility
const useFocusTrap = (isActive: boolean, containerRef: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusableElements = container.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift+Tab: if on first element, wrap to last
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: if on last element, wrap to first
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [isActive, containerRef]);
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ticking = useRef(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { handleAnchorClick } = useAnchorNavigation();

  // Focus trap for mobile menu
  useFocusTrap(isMobileMenuOpen, mobileMenuRef);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        // Return focus to the menu toggle button
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  const location = useLocation();
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const updateScrollState = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    ticking.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 使用 requestAnimationFrame 進行 throttle，確保每幀最多更新一次
      if (!ticking.current) {
        requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateScrollState]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        isScrolled ? "glass-header shadow-soft py-3" : "bg-background/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logoWithChar}
            alt="悅納 Injoy"
            className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground/80 hover:text-primary font-noto text-sm tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-foreground/80 hover:text-primary font-noto text-sm tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            )
          )}
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-foreground/80 hover:text-primary font-noto text-sm tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full cursor-pointer">
                預約
              </button>
            </PopoverTrigger>
            <PopoverContent
              sideOffset={12}
              className="w-auto rounded-lg border-primary/20 bg-popover/95 backdrop-blur-sm px-6 py-4 shadow-organic"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-muted-foreground text-xs tracking-widest">
                  電話預約
                </span>
                <a
                  href="tel:+886-2-2250-0166"
                  className="flex items-center gap-2 text-primary font-serif text-lg tracking-wider hover:text-zen-green transition-colors"
                >
                  <Phone size={16} strokeWidth={1.5} />
                  02-2250-0166
                </a>
              </div>
            </PopoverContent>
          </Popover>
        </nav>

        {/* Mobile Menu Button - 44x44px minimum touch target */}
        <button
          ref={menuButtonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground hover:text-primary transition-colors"
          aria-label={isMobileMenuOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        id="mobile-nav"
        role="dialog"
        aria-label="行動版導覽選單"
        aria-modal={isMobileMenuOpen}
        {...(!isMobileMenuOpen && { inert: "" as unknown as string })}
        className={`lg:hidden absolute top-full left-0 right-0 glass-header shadow-soft transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex flex-col items-center gap-4">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary font-noto text-base py-2 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  handleAnchorClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="text-foreground/80 hover:text-primary font-noto text-base py-2 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="tel:+886-2-2250-0166"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-foreground/80 hover:text-primary font-noto text-base py-2 transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={14} strokeWidth={1.5} />
            預約：02-2250-0166
          </a>
        </nav>
      </div>
    </header>
  );
};
