import React from "react";
import classes from "./cardDetails.module.css";
function CardDetails(props) {
  return (
    <div className={classes.card}>
      <div className={classes.top}>
        <div className={classes.svg}>{props.svg}</div>

        <div>
          <h1>{props.number}</h1>
          <h3>{props.title}</h3>
        </div>
      </div>
      <div className={classes.bottom}>
        <hr />
        <h3> {props.subnumber} in year</h3>
        <p> une suite de mots sans signification utilisée à titre </p>
      </div>
    </div>
  );
}

export default CardDetails;
