import React, { Fragment } from "react";
import Footer from "../Footer";
import MainNavBar from "./MainNavBar";

function Layout(props) {
  return (
    <Fragment>
      <MainNavBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
