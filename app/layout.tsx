import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const panameraLight = localFont({
  src: "./fonts/Panamera-Light.otf",
  variable: "--font-panamera-light",
});

const panameraRegular = localFont({
  src: "./fonts/Panamera-Regular.otf",
  variable: "--font-panamera-regular",
});

const panameraMedium = localFont({
  src: "./fonts/Panamera-Medium.otf",
  variable: "--font-panamera-medium",
});

const panameraBold = localFont({
  src: "./fonts/Panamera-Bold.otf",
  variable: "--font-panamera-bold",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${panameraLight.variable} ${panameraRegular.variable} ${panameraMedium.variable} ${panameraBold.variable} ${montserrat.variable} antialiased flex flex-col items-stretch min-h-screen bg-neutralLight-100`}
        // className={`${panameraRegular.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
