import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riamriam.org"),
  title: "RPDN | RIAMRIAM Peace and Development Network",
  description:
    "RPDN is a community-driven peace and development organization advancing social cohesion, resilience, governance, and sustainable livelihoods across the Ateker corridor.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    title: "RPDN | RIAMRIAM Peace and Development Network",
    description:
      "Building peace, empowering communities, and transforming lives across Kenya and East Africa.",
    type: "website",
    images: ["/riamriam-logo.png"]
  }
};

import { LanguageProvider } from "./context/LanguageContext";
import Chatbot from "./components/Chatbot";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}

