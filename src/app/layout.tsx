import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({ subsets: ["latin"], weight: "variable", display: "swap", variable: "--font-red-hat-text" });

export const metadata: Metadata = {
  title: "Frontend Mentor | Product List with Cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redHatText.variable}>
        <main className={"min-h-screen bg-rose-50 font-red-hat-text antialiased"}>{children}</main>
      </body>
    </html>
  );
}
