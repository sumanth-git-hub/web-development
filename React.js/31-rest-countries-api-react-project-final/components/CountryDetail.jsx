import React, { useContext, useEffect, useState } from "react";
import styles from "./CountryDetail.css";
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";
import Error from "./Error";
import CountryCardShimmer from "./CountryCardShimmer";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetail() {
  const params = useParams();

  const location = useLocation()
  const state = location.state

  // console.log(state)

  const fetchCountryName = params.country.toLocaleLowerCase();
  // console.log(fetchCountryName);

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // console.log(countryData?.Borders)
  // console.log("Hello")

  // const [isDarkMode] = useOutletContext()
      const [isDarkMode] = useTheme()

  //instead of copy pasting the below same code here creating the function to serve the same

  function updateCountryData(displayData) {
            setCountryData({
          CountryName: displayData.name.common,
          NativeName: displayData.name.nativeName ? Object.values(displayData.name.nativeName)[0].common : displayData.name.common,
          Population: displayData.population,
          Region: displayData.region,
          subRegion: displayData.subregion
            ? displayData.subregion
            : "Not Available",
          Capital: displayData.capital
            ? displayData.capital.join(", ")
            : "Not Available",
          topLevelDomain: displayData.tld
            ? displayData.tld.join(", ")
            : "Not Available",
          Currencies: displayData.currencies
            ? Object.values(displayData.currencies)
                .map((currency) => currency.name)
                .join(", ")
            : "Not Available",
          Languages: displayData.languages
            ? Object.values(displayData.languages).join(", ")
            : "Not Available",
          Flags: displayData.flags.svg,
          Borders: [],
        });
        // console.log(displayData.borders);

        if(!displayData.borders){
          displayData.borders = []
        }

Promise.all(displayData.borders.map(async (findBorder) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${findBorder}`);
  const [extractCode] = await res.json();
  return extractCode.name.common;
        })).then((allBordersName) => {
          setTimeout(() => {
                      setCountryData((prevState) => ({...prevState, Borders: allBordersName}))
          });
          // console.log(allBordersName)
        })
  }

  useEffect(() => {
    // console.log("UseEffect Called");

    if(state) {
      updateCountryData(state)
      return
    }

    fetch(
      `https://restcountries.com/v3.1/name/${fetchCountryName}?fullText=true`
    )
      .then((res) => res.json())
      .then(([displayData]) => {
        // console.log(displayData);
       updateCountryData(displayData)
     
      })
      .catch((displayError) => {
        setNotFound(displayError);
      });
  }, [fetchCountryName]);

  if (notFound) {
    return <Error />;
  }
  return countryData === null ? (<CountryCardShimmer />) : (
    <main className={isDarkMode ? "dark-mode" : ""}>
      {/* <CountryCardShimmer /> */}
      <section className="adjust-section">
        <span
          className="back-button"
          onClick={(e) => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
        </span>
        <div className="country-container">
          <img
            src={countryData.Flags}
            alt={`${countryData.CountryName} Flag`}
          />
          <div className="details-text">
            <h1 className="title-of-the-page">{countryData.CountryName}</h1>
            <div className="text-container">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.NativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="country-population">
                  {countryData.Population.toLocaleString("en-IN")}
                </span>
              </p>
              <p>
                <b>Region: </b>
                <span className="country-region">{countryData.Region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="country-capital">{countryData.Capital}</span>
              </p>
              <p className="middle-section">
                <b>Top Level Domain: </b>
                <span className="top-level-domain">
                  {countryData.topLevelDomain}
                </span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.Currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.Languages}</span>
              </p>
            </div>
            {countryData.Borders.length === 0 ? (
              true
            ) : (
              <div className="border-countries-section">
                <b>Border Countries: </b>
                {countryData.Borders.map((border, i) => {
                  // console.log(countryData.Borders.length);
                  return (
                    <Link key={i} to={`/${border}`}>
                      {border}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
