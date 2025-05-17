import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import TanStackProvider from "providers/TanstackProvider";
import toast, { Toaster } from 'react-hot-toast';
import { SocketContextProvider } from "@/components/Messenger/Chat/Soket/SocketContext";
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
  title:{
    default: "EventSphere",
    template: "%s | EventSphere"
  },
  description: "Smart Event Management and Booking Platform",
  keywords:["online", "ticket", "selling", "system","event", "management"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} >
        <TanStackProvider>
          <AuthProvider>
            <SocketContextProvider> 
            {children}
            <Toaster></Toaster>
            </SocketContextProvider>
      
          </AuthProvider>
        </TanStackProvider>
      </body>
  <script type='text/javascript' src='//pl26667229.profitableratecpm.com/61/17/62/61176237ed1f7a0c3a59b06e865a8314.js'></script>
  <script async="async" data-cfasync="false" src="//pl26667248.profitableratecpm.com/fa4ed044e8485867675225abe4ecf495/invoke.js"></script>
<div id="container-fa4ed044e8485867675225abe4ecf495"></div>
  
    </html>
  );
}
