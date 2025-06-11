import React, { useEffect, useState } from "react";
import styles from "./CountryDetail.css"

export default function CountryDetail() {
  const fetchCountryName = new URLSearchParams(location.search).get("name");
  console.log(fetchCountryName);

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${fetchCountryName}?fullText=true`
    )
      .then((res) => res.json())
      .then(([displayData]) => {
        console.log(displayData);
        setCountryData({
          CountryName: displayData.name.common,
          NativeName: Object.values(displayData.name.nativeName)[0].common,
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
            Languages: displayData.languages ? Object.values(displayData.languages).join(", ") : "Not Available",
            Flags : displayData.flags.svg
        });
      });
  }, []);

  return countryData === null ? (
    "Loading....."
  ) : (
    <main>
      <section className="adjust-section">
        <span className="back-button" onClick={(e) => {
            history.back()
        }}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
        </span>
        <div className="country-container">
          <img src={countryData.Flags} alt={`${countryData.CountryName} Flag`}/>   
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
            <div className="border-countries-section">
              <b>Border Countries: </b>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
