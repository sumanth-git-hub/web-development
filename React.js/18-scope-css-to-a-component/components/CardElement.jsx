import React from "react";

function CardElement(props) {
  const { passClass, passHeading, passModel, imgUrl, imgAttribute, children} = props;
  return (
    <div className={passClass}>
      <img src={imgUrl} alt={imgAttribute} />
      <h2>{passHeading}</h2>
      <p>{passModel}</p>
      {children}
    </div>
  );
}

export default CardElement;
