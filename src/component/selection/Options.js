import React from "react";

export default function Options(props) {
  return (
    <div className="options">
      <div className="option-palette">props.data[]</div>
      <hr style={{ borderTop: " 2px solid #8E8E8E", borderBottom: "0px", borderRadius: "5px", margin: "1em 3%" }}></hr>
    </div>
  );
}
