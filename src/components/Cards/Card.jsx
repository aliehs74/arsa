import React from "react";
import cardItems from "./cardItems";

export default function Card() {
  return (
    <div className="singleCard">
      <div className="topCard">
        <div className="halloween"></div>
        <div className="titleBar">
          <div className="upBar">
            <h2>KAYLAY GUNNER</h2>
            <div className="dot3"></div>
          </div>
          <div className="Bar">
            <div className="fillBar"></div>
          </div>
          <div className="downBar">
            PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY
          </div>
        </div>
      </div>

      <ul className="middleCard">{cardItems.map((item) => item)}</ul>

      <h2 className="bottomCard">KNOW MORE</h2>
    </div>
  );
}
