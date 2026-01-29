import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "關於悅納", href: "/about", isRoute: true },
  { label: "餐飲體驗", href: "#dining", isRoute: false },
  { label: "人文空間", href: "#space", isRoute: false },
  { label: "生活美學", href: "#life", isRoute: false },
  { label: "優質選物", href: "#shop", isRoute: false },
  { label: "交通資訊", href: "#location", isRoute: false },
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

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ticking = useRef(false);
  const { handleAnchorClick } = useAnchorNavigation();

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
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-organic transition-transform group-hover:scale-105">
            <span className="text-primary-foreground font-serif text-sm font-medium">
              Injoy
            </span>
          </div>
          <span className="font-serif text-xl text-primary font-medium tracking-wide">
            悅納
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground/80 hover:text-primary font-sans text-sm tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-foreground/80 hover:text-primary font-sans text-sm tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-header shadow-soft transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary font-sans text-base py-2 transition-colors"
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
                className="text-foreground/80 hover:text-primary font-sans text-base py-2 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};
