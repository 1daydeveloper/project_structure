import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import Maintanance from "@/components/common/Maintanace";
import {ThemeToggle} from "@/components/common/ThemeToggle";

// Define the RootLayoutProps type
interface RootLayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OD2",
  description: "A company that specializes in developeing a apps in One Day",
};

export default function RootLayout({ children }: RootLayoutProps) {
  const isMaintenance = process.env.NEXT_PUBLIC_IS_MAINTENANCE === "true";

  if (isMaintenance) {
    return (
      <html lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              <ThemeToggle />

            <Maintanance />
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${roboto.variable} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}