import type { Metadata } from "next";
import { Lora, Roboto_Condensed } from "next/font/google";
import cityLights from "@/assets/CityLights.jpg";

import "./globals.css";
import { BASE_PATH } from "@/constants/basepath";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getPortfolioContent } from "@/lib/static-assets/get-portfolio-content";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Portfolio | Vanz Lorenzo`,
    description: "vanz's portfolio",
    icons: {
      icon: `${BASE_PATH}/favicon.ico`,
    },
  };
}

export const viewport = {
  themeColor: "#333333",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { site } = getPortfolioContent();
  return (
    <html
      lang="en"
      className={`${lora.variable} ${robotoCondensed.variable}`}
      style={{ "--page-bg": `url(${cityLights.src})` } as React.CSSProperties}
    >
      <body>
        <Header site={site} />
        {children}
        <Footer site={site} />
      </body>
    </html>
  );
}
