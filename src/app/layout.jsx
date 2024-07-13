import { Righteous } from "next/font/google";
import "./globals.css";

const righteous = Righteous({ subsets: ["latin"], weight:["400"] });

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={righteous.className}>{children}</body>
    </html>
  );
}
