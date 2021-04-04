import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout;
