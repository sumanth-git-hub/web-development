import React, { useContext } from "react";
import styles from "./ShimmerEffect.css"
import React from "react";
import { useOutletContext } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
// import { ThemeContext } from "../contexts/ThemeContext";

export default function CountryCardShimmer() {
    // const [isDarkMode] = useOutletContext()
      const [isDarkMode] = useTheme()
  return (
   <main className={isDarkMode ? "dark-mode" : ""}>
     <section className="adjust-section">
      <span className="back-button text-content-shimmer-small">
        {/* <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> */}
        &nbsp;&nbsp;
      </span>
      <div className="country-container">
        <img id="shimmer-image-individual"/>
        <div className="details-text">
          <h1 className="title-of-the-page text-content-shimmer"></h1>
          <div className="fix-p">
            <p className="text-content-shimmer-small">
              <b></b>
              <span className="native-name"></span>
            </p>
            <p className="text-content-shimmer-small">
              <b></b>
              <span className="country-population"></span>
            </p>
            <p className="text-content-shimmer-small">
              <b></b>
              <span className="country-region"></span>
            </p>
            <p className="text-content-shimmer-small">
              <b></b>
              <span className="sub-region"></span>
            </p>
          </div>
          <div className="border-countries-section small-border-container">
            {/* <b className="text-content-shimmer-small"></b> */}
           
           {
            Array.from({length: 3}).map((smallCards, i)=> {
                return <a key={i} className="small-border-cards-shimmer"></a>
            })
           }
            
          </div>
        </div>
      </div>
    </section>
   </main>
  );
}
