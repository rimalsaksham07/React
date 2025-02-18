import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* outlet le garda header same hunxa footer same hunxa tara content chai change hunxa  */}
      <Footer />
    </>
  );
}
export default Layout;
