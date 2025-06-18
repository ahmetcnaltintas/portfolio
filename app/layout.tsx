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
  title: {
    default: "Ahmet Can Altıntaş - Full Stack Developer",
    template: "%s | Ahmet Can Altıntaş"
  },
  description: "Full Stack Developer. React, Next.js, Node.js ve modern web teknolojileri ile projeler geliştiriyorum.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "JavaScript", "TypeScript", "Portfolio"],
  authors: [{ name: "Ahmet Can Altıntaş" }],
  creator: "Ahmet Can Altıntaş",
  publisher: "Ahmet Can Altıntaş",
  icons: {
    icon: [
      { url: "/ahmet.webp", sizes: "16x16", type: "image/webp" },
      { url: "/ahmet.webp", sizes: "32x32", type: "image/webp" },
      { url: "/ahmet.webp" }
    ],
    apple: [
      { url: "/ahmet.webp", sizes: "180x180", type: "image/webp" }
    ],
    other: [
      { rel: "mask-icon", url: "/ahmet.webp", color: "#000000" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}