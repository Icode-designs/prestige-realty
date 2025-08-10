import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { GlobalStyleBox } from "@/styles/Global.styles";
import NavContextProvider from "@/store/nav.context";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";

const RootLayout = () => {
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
