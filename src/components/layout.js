import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import { Box } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
      <ToastContainer />
      <Header />
      <div style={{ flexGrow: '1' }}>
        <main>{children}</main>
      </div>
      <Footer />
    </Box>
  )
}

export default Layout;
