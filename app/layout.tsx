import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moderate Reform | Make Room for Tomorrow",
  description: "The Moderate Reform plan for a freer, safer and more confident Caprica.",
  icons: { icon: "/images/mr-logo.png", shortcut: "/images/mr-logo.png" },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
