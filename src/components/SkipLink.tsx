/**
 * Skip Link Component
 *
 * Accessibility feature that allows keyboard and screen reader users
 * to skip navigation and jump directly to main content.
 *
 * - Hidden by default, appears on focus (Tab key)
 * - Positioned at top of page with high z-index
 * - Links to #main-content which should be on the main content area
 */
export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 font-sans text-sm"
    >
      跳到主要內容
    </a>
  );
};
