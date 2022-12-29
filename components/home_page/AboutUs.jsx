import React from "react";
import Image from "next/image";
import classes from "./AboutUs.module.css";
function AboutUs() {
  return (
    <section className={classes.aboutus}>
      <div className={classes.left}>
        <h2> About me ?</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          <br />
          pariatur . aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </div>
      <div className={classes.right}>
        <Image
          src="/images/site/max.png"
          alt="wiam picture"
          //layout="fill"

          width={350}
          height={350}
        />
      </div>
    </section>
  );
}

export default AboutUs;
