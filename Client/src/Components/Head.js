import React from "react";
import RecommendationGuy from "./RecommendationGuy";

export default function Head(props) {
  return (
    <div className="headlayer">
      <h1 className="head">somethinginator - 9000</h1>
      <RecommendationGuy recommendationHandler={props.recommendationHandler} />
    </div>
  );
}
