import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { StickyInvestorBar } from "@/components/StickyInvestorBar";

export const metadata: Metadata = {
  title: "Ecource Ltd. | Breakthrough Whole-Fish Processing Technology",
  description:
    "Ecource Ltd. is an Israeli company with patent-pending whole-fish processing technology that doubles the yield of every fish into premium food products.",
  keywords: [
    "fish processing",
    "aquaculture",
    "food technology",
    "Israel",
    "investment",
    "sustainable seafood",
  ],
  openGraph: {
    title: "Ecource Ltd. | Breakthrough Whole-Fish Processing Technology",
    description:
      "Patent-pending technology that doubles fish yield into premium food products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <StickyInvestorBar />
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
