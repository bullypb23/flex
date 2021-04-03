import * as React from "react";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout;
