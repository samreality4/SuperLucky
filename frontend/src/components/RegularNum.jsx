import React from "react";

function RegularNum(props) {
  return (
    <div
      className="container d-inline-flex justify-content-center align-items-center m-3"
      style={{
        backgroundImage: `url("../images/circle.svg")`,
        height: "50px",
        width: "50px",
      }}
    >
      <span>{props.num}</span>
    </div>
  );
}

export default RegularNum;
