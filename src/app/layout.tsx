import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";
import Head from "next/head";



export const metadata: Metadata = {
  title: "EJL",
  description: "EJL project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
