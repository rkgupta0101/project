import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StarClinch Experience",
  description: "Landing page inspired by StarClinch Figma prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-page-bg text-white">
        {children}
      </body>
    </html>
  );
}
