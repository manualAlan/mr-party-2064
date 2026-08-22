import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LCA | Make Room for Tomorrow",
  description: "The LCA alliance program for a freer, safer and more confident Caprica.",
  icons: {
    icon: [{ url: "/images/lca-logo.svg?v=lca-2064", type: "image/svg+xml" }],
    shortcut: "/images/lca-logo.svg?v=lca-2064",
    apple: "/images/lca-logo.svg?v=lca-2064",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
