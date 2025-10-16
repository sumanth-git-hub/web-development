import React, { useEffect, useRef, useState } from "react";

const TimeAndDate = () => {
  const [today, setToday] = useState(new Date());

  //   console.log("rendering")

  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timerSection">
    <i className="fa-regular fa-clock"></i>
      <span>
        {today.getHours() < 10 ? "0" + today.getHours() : today.getHours()}
      </span>
      :
      <span>
        {today.getMinutes() < 10
          ? "0" + today.getMinutes()
          : today.getMinutes()}
      </span>
      :<span className="">{today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()}</span> <i className="fa-regular fa-calendar"></i><span>{today.getDate()}</span>
      <span>{monthArray[today.getMonth()]}</span><span>{today.getFullYear()}</span>
    </div>
  );
};

export default TimeAndDate;
