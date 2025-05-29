import React from "react";

export default function Buttons({ imgUrl, clickFunction, passChildren }) {
  return (
    <button
      className="button-element"
      title={passChildren}
      onClick={clickFunction}
    >
      <img src={imgUrl} alt={passChildren} /> <p>{passChildren}</p>
    </button>
  );
}
