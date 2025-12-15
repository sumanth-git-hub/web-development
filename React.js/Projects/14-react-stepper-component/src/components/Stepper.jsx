import React, { useState } from "react";
import itemsList from "../data";

const Stepper = () => {
  console.log(itemsList.length);

  const [currentStep, setCurrentStep] = useState(0);
  const [thanksModal, setThanksModal] = useState(false);

  const handleCurrentStep = () => {
    if (currentStep < itemsList.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setThanksModal(false);
    } else {
      setCurrentStep((prev) => prev = 0);
      setThanksModal(true);
    }
  };
  const handleBackStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  console.log(currentStep);
  return (
    <div className="stepper">
      <div>
        {itemsList.map(({ label }, index) => {
          return (
            <div key={index} className="stepper-container">
              <div
                className={`step-number ${
                  currentStep >= index ? "active" : ""
                }`}
              >
                {index + 1}
                {index < itemsList.length - 1 ? (
                  <div
                    className={`step-line ${
                      currentStep > index ? "active" : ""
                    } `}
                  ></div>
                ) : (
                  ""
                )}
              </div>
              <div className="step-level">{label}</div>
            </div>
          );
        })}
      </div>
      <div className="stepper-content">
        {thanksModal ? (
          <div className="thanks-modal">
            <p>Thanks for Using Stepper Component</p>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="px-4 inline-block bg-purple-300 rounded-sm cursor-pointer mt-2"
            >
              Reset
            </button>
          </div>
        ) : (
          <>
            <div>{itemsList[currentStep].content}</div>
            <div className="stepper-controls flex gap-2">
              <button
                className="px-4 inline-block bg-purple-300 rounded-sm cursor-pointer"
                onClick={handleBackStep}
              >
                Back
              </button>
              <button
                className="px-4 inline-block bg-purple-300 rounded-sm cursor-pointer"
                onClick={() => {
                  handleCurrentStep();
                }}
              >
                Continue
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Stepper;
