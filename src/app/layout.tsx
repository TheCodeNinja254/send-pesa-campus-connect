import { Inter } from "next/font/google";
import React from "react";
import { MainLayout } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simple Send Money App",
  description: "Created and Curated by Fredrick Mbugua @TheCodeNinja254",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
