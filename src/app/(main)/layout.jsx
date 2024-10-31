"use client"
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import TanStackProvider from "providers/TanstackProvider";
import { useEffect } from "react";

const MainLayout = ({ children }) => {
  const session = useSession()
  const path = usePathname();


  useEffect(() => {
      if (session?.data?.user?.email) {
        document.cookie = `myEmail=${session?.data?.user?.email}; path=/;`;
      }
      else {
       document.cookie = `myEmail=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
      }

  }, [session?.data?.user?.email])

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