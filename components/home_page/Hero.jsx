import React from "react";
import Image from "next/image";
import classes from "./Hero.module.css";
// <div className={classes.image}>
//         <Image src="/images/site/max.png" height={300} width={300} />
//       </div>
function Hero() {
  return (
    <section className={classes.hero}>
      <h1> Hi , i'm mehal wiam</h1>
      <h2>a'Developer.</h2>
      <p>
        {" "}
        i blog about web developement , espicially about frontend frameworks
        like react , angular and vue.js .
      </p>

      <button className={classes.btn}>Learn more</button>
    </section>
  );
}

export default Hero;
