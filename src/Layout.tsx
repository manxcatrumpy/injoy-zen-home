import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClientOnly } from "vite-react-ssg";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

/**
 * Root layout shared by every route. Holds the app-wide providers and the
 * client-only toast portals, then renders the matched page via <Outlet />.
 */
const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ClientOnly>{() => <Toaster />}</ClientOnly>
      <ClientOnly>{() => <Sonner />}</ClientOnly>
      <ScrollToTop />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

export default Layout;
