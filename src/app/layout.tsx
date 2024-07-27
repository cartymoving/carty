import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./shared/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carty Moving & Storage",
  description: "Carty Cares: Your Premier Moving Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi"/>
      </head>
      <body className={`${inter.className} bg-mywhite`}>
        <header>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          {/* <Footer /> */}
        </footer>
      </body>  
    </html>
  );
}
