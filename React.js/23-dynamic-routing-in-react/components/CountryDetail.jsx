import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default function CountryDetail() {
  const params = useParams();

  const fetchCountryName = params.country;
  console.log(fetchCountryName);
  const [cardDetails, setCardDetails] = useState(null);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${fetchCountryName}?fullText=true`
    )
      .then((res) => res.json())
      .then(([data]) => {
        setCardDetails({
          countryName: data.name.common,
          countryFlag: data.flags.svg,
          setRegion: data.region,
          setCapital: data.capital,
          setSubregion: data.subregion,
          setPopulation: data.population.toLocaleString("en-IN"),
          setNative: Object.values(data.name.nativeName)[0].common,
          setCurrencies: Object.values(data.currencies).map(
            (currency) => currency.name
          ),
          setLanguages: Object.values(data.languages).join(", "),
          setTLD: data.tld.join(", "),
        });
        console.log(data);
      })
      .catch((displayError) => {
        setNotFound(true);
        console.log(displayError);
      });
  }, []);

  console.log(notFound);

  if (notFound === true) {
    return <ErrorPage />;
  }
  return cardDetails === null ? (
    "Loading....."
  ) : (
    <main>
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
            src={cardDetails.countryFlag}
            alt={`${cardDetails.countryName} flag`}
          />
          <div className="details-text">
            <h1 className="title-of-the-page">{cardDetails.countryName}</h1>
            <div className="text-container">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{cardDetails.setNative}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="country-population">
                  {cardDetails.setPopulation}
                </span>
              </p>
              <p>
                <b>Region: </b>
                <span className="country-region">{cardDetails.setRegion}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{cardDetails.setSubregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="country-capital">
                  {cardDetails.setCapital}
                </span>
              </p>
              <p className="middle-section">
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{cardDetails.setTLD}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies"></span>
                {cardDetails.setCurrencies}
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{cardDetails.setLanguages}</span>
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
