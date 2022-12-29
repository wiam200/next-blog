import Image from "next/image";
import React from "react";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo}>
      {" "}
      <div className={classes.image}>
        <Image src="/images/site/max.png" height={300} width={300} />{" "}
      </div>
      wiam' Next blog
    </div>
  );
}

export default Logo;
