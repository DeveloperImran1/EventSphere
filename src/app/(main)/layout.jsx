"use client"
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";
import TanStackProvider from "providers/TanstackProvider";
import { useEffect } from "react";

const MainLayout = ({ children }) => {
  const path = usePathname();

  return (
    <div      >
      {
        path.includes("login") || path.includes("register") ? <></> : <Navbar></Navbar>
      }
      {children}
      {
        path.includes("login") || path.includes("register") || path.includes("community") || path.includes("messenger") ? <></> : <Footer></Footer>
      }

    </div>
  );
};

export default MainLayout;