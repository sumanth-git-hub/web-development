import React from 'react'
// import leftArrow from '../10-use-images-in-react/assets/images/arrow.png'
// import rightArrow from '../10-use-images-in-react/assets/images/arrow-right-solid.svg'
import AppleCounter from './components/AppleCounter'
import Counter from './components/Counter'


// console.log(leftArrow)

const App = () => {
    return (
    <div>
        <Counter abbreviation={"main Heading"}/>
        <AppleCounter AddClass={'main-section'}/>
    </div>)
}

export default App