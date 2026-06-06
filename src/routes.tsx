import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "about",
        lazy: async () => ({ Component: (await import("./pages/About")).default }),
        entry: "src/pages/About.tsx",
      },
      {
        path: "dining",
        lazy: async () => ({ Component: (await import("./pages/Dining")).default }),
        entry: "src/pages/Dining.tsx",
      },
      {
        path: "space",
        lazy: async () => ({ Component: (await import("./pages/Space")).default }),
        entry: "src/pages/Space.tsx",
      },
      {
        path: "life",
        lazy: async () => ({ Component: (await import("./pages/Life")).default }),
        entry: "src/pages/Life.tsx",
      },
      {
        path: "shop",
        lazy: async () => ({ Component: (await import("./pages/Shop")).default }),
        entry: "src/pages/Shop.tsx",
      },
      {
        path: "location",
        lazy: async () => ({ Component: (await import("./pages/Location")).default }),
        entry: "src/pages/Location.tsx",
      },
      {
        path: "*",
        lazy: async () => ({ Component: (await import("./pages/NotFound")).default }),
      },
    ],
  },
];
