import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-montserrat",
  display: "swap",
});

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
//   variable: "--font-poppins",
//   display: "swap",
// });

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

// const panameraLight = localFont({
//   src: "./fonts/Panamera-Light.otf",
//   variable: "--font-panamera-light",
// });

// const panameraRegular = localFont({
//   src: "./fonts/Panamera-Regular.otf",
//   variable: "--font-panamera-regular",
// });

// const panameraMedium = localFont({
//   src: "./fonts/Panamera-Medium.otf",
//   variable: "--font-panamera-medium",
// });

// const panameraBold = localFont({
//   src: "./fonts/Panamera-Bold.otf",
//   variable: "--font-panamera-bold",
// });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://vennstudio.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Venn Studio | We are a Web Development Studio",
  description: "Book a call with us to talk about your next project. We thrive working with complex specs and tight schedules through creative iterations. From web and mobile, to crypto and AI, we got you covered!",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Venn Studio',
    title: "Venn Studio | We are a Web Development Studio",
    description: "Book a call with us to talk about your next project. We thrive working with complex specs and tight schedules through creative iterations. From web and mobile, to crypto and AI, we got you covered!",
    images: [{
      url: '/images/metadata.png', // Next.js will automatically resolve this
      width: 1200,
      height: 630,
      alt: 'Venn Studio banner'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Venn Studio | We are a Web Development Studio",
    description: "Book a call with us to talk about your next project. We thrive working with complex specs and tight schedules through creative iterations. From web and mobile, to crypto and AI, we got you covered!",
    images: ['/metadata.png']
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico', // If you have these
    // apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${panameraLight.variable} ${panameraRegular.variable} ${panameraMedium.variable} ${panameraBold.variable} ${montserrat.variable} ${poppins.variable} antialiased flex flex-col items-stretch min-h-screen bg-neutralLight-100 relative`}
        // className={`${poppins.variable} antialiased flex flex-col items-stretch min-h-screen bg-neutralLight-100 relative`}
        className={`${raleway.variable} ${montserrat.variable} font-[family-name:var(--font-raleway)] antialiased flex flex-col items-stretch min-h-screen bg-background text-foreground relative`}
        // className={`${panameraRegular.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        {/* <div className="absolute top-0 left-0 z-[-1] h-full w-full overflow-hidden blur-[30px]">
          <Image
            // className="rotate-180 opacity-60"
            className="rotate-90 opacity-50"
            src="images/circles-desktop7.svg"
            alt="About us"
            width={1440}
            height={800}
            priority
          />
        </div> */}
      </body>
    </html>
  );
}
