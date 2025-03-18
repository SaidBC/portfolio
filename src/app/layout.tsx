import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <span className="absolute w-3xl h-180 rounded-full blur-3xl bg-gradient-to-l from-primary/10 to-white/10 animate-spin left-1/2 -translate-1/2 -z-1"></span>
        {children}
      </body>
    </html>
  );
}
