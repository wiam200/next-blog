import React from "react";
import Cards from "./cards/Cards";
import classes from "./statistiques.module.css";
function Statistiques() {
  return (
    <section className={classes.container}>
      <h2> All weekend statistiques</h2>
      <Cards />
    </section>
  );
}

export default Statistiques;
