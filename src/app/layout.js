import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import TanStackProvider from "providers/TanstackProvider";
import toast, { Toaster } from 'react-hot-toast';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "EventSphare",
  description: "Smart Event Management and Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} >
        <TanStackProvider>
          <AuthProvider>
            {children}
            <Toaster></Toaster>
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
