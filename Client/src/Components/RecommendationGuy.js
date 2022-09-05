import React from "react";

export default function RecommendationGuy(props) {
  return (
    <div className="recommendation-guy">
      <button
        className="recommendationGuy"
        onClick={props.recommendationHandler}
      >
        Reccomend a curse!!
      </button>
    </div>
  );
}
