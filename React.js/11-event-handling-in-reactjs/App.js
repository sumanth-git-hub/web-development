import React from 'react'
// import leftArrow from '../10-use-images-in-react/assets/images/arrow.png'
// import rightArrow from '../10-use-images-in-react/assets/images/arrow-right-solid.svg'
import AppleCounter from './components/AppleCounter'


// console.log(leftArrow)

const App = () => {
    return (
    <div>
        <h1 style={{
            textAlign: 'center'
        }}>Event Handling in React</h1>
        <AppleCounter AddClass={'main-section'}/>
    </div>)
}

export default App