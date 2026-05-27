import cityLights from "@/assets/CityLights.jpg";
import type { Metadata } from "next";
import { Lora, Roboto_Condensed } from "next/font/google";

import "@/app/globals.css";

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
      icon: "/favicon.ico",
    },
  };
}

export const viewport = {
  themeColor: "#333333",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${robotoCondensed.variable}`}
      style={{ "--page-bg": `url(${cityLights.src})` } as React.CSSProperties}
    >
      <body>{children}</body>
    </html>
  );
}
