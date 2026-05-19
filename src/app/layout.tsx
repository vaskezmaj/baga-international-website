import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bagaintercontinental.online"),
  title: "Baga Intercontinental LLC – Amazon FBA Services",
  description:
    "End-to-end Amazon FBA partner. From product research and supplier sourcing to listing optimization and PPC management — Baga Intercontinental handles every step of your Amazon journey.",
  openGraph: {
    title: "Baga Intercontinental LLC – Amazon FBA Services",
    description:
      "End-to-end Amazon FBA partner. From product research to PPC management — scale your Amazon business with Baga Intercontinental.",
    images: [{ url: "/seo-image.png", width: 500, height: 500 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baga Intercontinental LLC – Amazon FBA Services",
    description:
      "End-to-end Amazon FBA partner. From product research to PPC management.",
    images: ["/seo-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
