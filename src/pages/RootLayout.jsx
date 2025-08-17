import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { GlobalStyleBox } from "@/styles/Global.styles";
import NavContextProvider from "@/store/nav.context";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import { useEffect } from "react";

const RootLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <NavContextProvider>
      <Header />
      <Outlet />
      <NewsLetter />
      <Footer />
    </NavContextProvider>
  );
};

export default RootLayout;
