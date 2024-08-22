import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Polash Ahmad | Front End Engineer",
  description: "Polash Ahmad - Front-End Engineer specializing in React.js, Next.js, Firebase.js, Redux.js, Git, GitHub, SASS, TailwindCSS, HTML, and CSS. Crafting dynamic, responsive, and user-centric web applications with modern front-end technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
