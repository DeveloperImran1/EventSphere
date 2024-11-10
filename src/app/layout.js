import localFont from "next/font/local";
import "./globals.css";
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


// aikhane kiso real information dia chage korte hobe for SEO
export const metadata = {
  title: {
    default: "Book Vila",
    template: "%s | Book Vila"
  },
  description: "Discover, explore, and buy books online at Book Vila - your go-to platform for novels, educational resources, self-development, children's books, and more.",
  keywords: [
    "Book Vila",
    "online bookstore",
    "buy books online",
    "novels",
    "self-development books",
    "children's books",
    "educational books",
    "book shop",
    "Bangla books",
    "literature"
  ],
  author: "Book Vila Team",
  openGraph: {
    title: "Book Vila - Your Online Bookstore",
    description: "Discover and buy your favorite books online at Book Vila. From novels to educational resources, we have a wide range of categories.",
    type: "website",
    url: "https://yourwebsite.com", // replace with actual URL
    images: [
      {
        url: "https://i.ibb.co.com/SfNwSrp/Whats-App-Image-2024-10-10-at-11-12-02-PM-removebg-preview-1.png", // replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Book Vila - Your Online Bookstore"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Vila - Your Online Bookstore",
    description: "Discover and buy your favorite books online at Book Vila.",
    images: ["https://i.ibb.co.com/SfNwSrp/Whats-App-Image-2024-10-10-at-11-12-02-PM-removebg-preview-1.png"] // replace with actual image URL
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``} >
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
