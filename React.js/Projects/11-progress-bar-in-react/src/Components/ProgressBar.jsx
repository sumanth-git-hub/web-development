import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [isProgress, setIsProgress] = useState([0, 0, 0, 0, 0]);

  const proWidth = [0, 25, 50, 75, 100];
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProgress(proWidth);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  console.log(isProgress);

  return (
    <div>
      <h2>Progressbar in React</h2>
      <div className="progress-section">
        {isProgress.map((progressMultiple, index) => {
          return (
            <div key={index} className="progressContainer">
              {" "}
              <div
                className="progress"
                role="progressbar"
                aria-valuemax={"100"}
                aria-valuemin={"0"}
                aria-valuenow={progressMultiple}
                style={{ width: `${progressMultiple}%` }}
              >
                <span>{progressMultiple}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
