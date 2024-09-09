import { Jost } from "next/font/google";
import "./globals.css";

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Designo",
  description: "Award-winning custom designs and digital branding solutions",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
