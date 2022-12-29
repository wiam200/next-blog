import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.first}>
        <h1>Wiam' Next blog</h1>
        <hr />
      </div>

      <div className={classes.right}>
        <ul>
          <li> posts</li>
          <li> featured posts</li>
          <li> contact</li>
        </ul>
        <h4>(c) 2022.All right reserved</h4>
      </div>
    </footer>
  );
}

export default Footer;
