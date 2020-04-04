import React from "react";

function MegaNum(props) {
  return (
    <div
      className="container d-inline-flex justify-content-center align-items-center m-3"
      style={{
        fill: "#ffd31d",
        backgroundImage: `url("../images/megacircle.svg")`,
        height: "50px",
        width: "50px",
      }}
    >
      <span>{props.num}</span>
    </div>
  );
}

export default MegaNum;
