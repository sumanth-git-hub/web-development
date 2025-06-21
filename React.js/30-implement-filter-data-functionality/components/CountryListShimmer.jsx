import React from "react";

export default function () {
  // new Array(10).fill("Hello World!!")

  // const mappedArray = Array.from({length: 10}).map((elements, i) => {
  //   return <div key={i} className="countries-list shimmer-card"></div>
  // })

  return (
    <div className="countries-card-container">
      {Array.from({ length: 10 }).map((elements, i) => {
        return <div key={i} className="countries-list shimmer-card"></div>;
      })}
      {/* <div className="countries-list shimmer-card"></div>
        <div className="countries-list shimmer-card"></div>
        <div className="countries-list shimmer-card"></div>
        <div className="countries-list shimmer-card"></div>
        <div className="countries-list shimmer-card"></div>
        <div className="countries-list shimmer-card"></div>
        <div className="countries-list shimmer-card"></div>
        <div className="countries-list shimmer-card"></div>
        <div className="countries-list shimmer-card"></div>
        <div className="countries-list shimmer-card"></div> */}
    </div>
  );
}
