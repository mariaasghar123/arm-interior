// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "@/components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ARM-interior",
  description: "Website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Logo at top left - Fixed position */}
        {/* <div className="left-6 z-50">
          <Logo size={180} />
        </div>
        
        <div className=" left-0 right-0 z-50 flex justify-center">
          <Navbar />
        </div> */}
        
        {/* Main Content with padding for fixed elements */}
        <main className="">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}