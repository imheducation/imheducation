import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMH Education Centre | Bareilly",
  description: "Created by Vishal Rajdeep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-neutral-300 ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
