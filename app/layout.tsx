import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LCA | Make Room for Tomorrow",
  description: "The LCA alliance program for a freer, safer and more confident Caprica.",
  icons: { icon: "/images/lca-logo.svg", shortcut: "/images/lca-logo.svg" },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
