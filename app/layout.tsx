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
  title: "Peter Wei - Portfolio",
  description: "Peter Wei's personal portfolio website featuring projects, skills and experience",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/Peter Wei Logo.png', type: 'image/png' },
    ],
    apple: '/Peter Wei Logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Peter Wei',
    title: 'Peter Wei - Portfolio',
    description: 'Peter Wei Portfolio Website',
    images: [
      { url: '/Peter Wei Logo.png', type: 'image/png' },
    ],
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
        {/* Favicon is handled by the metadata above */}
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
