import React, { Children, useState } from 'react'
import Button from './components/Button'
import './style.css'
import CardElement from './components/CardElement'
import virtusImage from 'url:./assets/vw-virtus-tsi.avif'
import slaviaImage from 'url:./assets/skoda-slavia.avif'
import hondaCity from 'url:./assets/honda-city.avif'
import suzukiCiaz from 'url:./assets/suzuki-ciaz.webp'
import Counter from './components/Counter'
import styles from './components/CounterStyles.module.css'
console.log(styles)

const profileUrl = 'https://github.com/sumanth-git-hub'

function App() {
  const [counts, setCounts] = useState(0)
  // const setMyCounts = useState(0)
  // console.log(setMyCounts)
  return (
    <>
            <h1 className='heading-element'>CSS Scope in React</h1>
            <p style={{
              textAlign: "center"
            }}>Used the same class name for all of the buttons present in the webpage but the CSS scope played a role to make sure the style should be applied on the component basis</p>
    <section className='main-container'>
        <CardElement imgUrl={virtusImage} passClass="card-element" passHeading="Volkswagen" passModel="Virtus GT Plus Sport">
        <Button fetchUrl={profileUrl} passClass="buttonElement">Know more</Button>
        </CardElement>
        <CardElement imgUrl={slaviaImage} passClass="card-element" passHeading="Skoda" passModel="Slavia Sportline 1.5 TSI">
        <Button fetchUrl={profileUrl} passClass="buttonElement">Know more</Button>
        </CardElement>
        <CardElement imgUrl={hondaCity} passClass="card-element" passHeading="Honda" passModel="City ZX Petrol MT">
        <Button fetchUrl={profileUrl} passClass="buttonElement">Know more</Button>
        </CardElement>
        <CardElement imgUrl={suzukiCiaz} passClass="card-element" passHeading="Suzuki" passModel="Ciaz Sigma 1.5">
        <Button fetchUrl={profileUrl} passClass="buttonElement">Know more</Button>
        </CardElement>
    </section>
    <h2 className='heading-element'>Rendering Element</h2>
    <section className='rendering-layout'>
      <Counter passClass="counter-element" passClassH2={styles["counter-number-section"]} passClassButton={styles.buttonElement} buttonContent="Render +" renderingCounts={counts} counterFunction={(e) => {
      // setMyCounts[1](setMyCounts[0] + 1)
      setCounts(counts + 1)
    }}>
    </Counter> {
      (counts > 4)? ' ' : <Counter passClass="counter-element" passClassH2={[styles["counter-number-section"], styles["apply-text-shadow-less"]].join(" ")} passClassButton={styles.buttonElement} buttonContent="Render -" renderingCounts={counts} counterFunction={(e) => {
      // setMyCounts[1](setMyCounts[0] + 1)
      setCounts(counts - 1)
    }}>
    </Counter>
    }
    </section>
    </>
  )
}

export default App