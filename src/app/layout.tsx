import type { Metadata } from "next";
import "./globals.css";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "مركز طب اسنان",
  description: "مركز طب اسنان",
  icons: {
    icon: "/Logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${alexandria.className} antialiased`}>{children}</body>
    </html>
  );
}
