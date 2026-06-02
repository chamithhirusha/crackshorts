import RouteChrome from "@/components/layout/RouteChrome";
import FramerProvider from "@/components/providers/FramerProvider";
import LenisProvider from "@/components/providers/LenisProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrackShorts - Schedule and automate your YouTube Shorts uploads",
  description:
    "CrackShorts is a YouTube Shorts scheduling and automation tool that helps content creators plan, schedule, and automate their Shorts uploads with ease. With features like bulk video uploads, customizable scheduling, metadata templates, and analytics tracking, CrackShorts streamlines the content creation process and maximizes audience engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "dark",
      )}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <FramerProvider>
            <RouteChrome>{children}</RouteChrome>
          </FramerProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
