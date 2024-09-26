"use client"
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }) => {
  const path = usePathname();
  console.log(path.includes("login"))
  return (
    <div>
      {
        path.includes("login") ||  path.includes("register")  ? <></> : <Navbar></Navbar>
      }
      {children}
      {
         path.includes("login") ||  path.includes("register")  ? <></> : <Footer></Footer>
      }

    </div>
  );
};

export default MainLayout;