import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Said's portfolio",
  description: "Welcome there visitor to said's portofolio,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="overflow-x-hidden absolute w-dvw h-dvh -z-1">
          <span className="absolute w-3xl h-180 rounded-full blur-3xl bg-gradient-to-l from-primary/10 to-white/10 animate-spin left-1/2 -translate-1/2 -z-1"></span>
        </div>
        {children}
      </body>
    </html>
  );
}
