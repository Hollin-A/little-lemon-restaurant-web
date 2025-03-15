import { Outlet } from "react-router-dom";

import Footer from "@/components/containers/Footer";
import NavigationBar from "@/components/containers/NavigationBar";

const RootLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
