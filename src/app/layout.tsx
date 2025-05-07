import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Poraussuba",
  description: "Site de trabalho político social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
     <body className={`${quicksand.variable} font-quicksand text-text min-h-screen bg-white`}>
        {children}
      </body>
    </html>
  );
}
