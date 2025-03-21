import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from '@/components/NavigationProvider';
import AppLayout from '@/components/AppLayout';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter Wei",
  description: "AI-powered voice assistant with wake word detection",
  icons: {
    icon: '/Peter Wei Logo.png',
    apple: '/Peter Wei Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Peter Wei Logo.png" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationProvider>
            <AppLayout>{children}</AppLayout>
            <Toaster />
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
