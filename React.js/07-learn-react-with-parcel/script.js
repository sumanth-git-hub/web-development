console.log('Hello World!!');


/*
// import the data through named export
import {carDetails as data} from './data.js'

*/

/*
//import the data through default export
import data from './data.js'
*/

import React from 'react';
console.log(React)

//code to avoid page reloading while hot reloading 
if (module.hot) {
  module.hot.accept();
}

const headingElement = <div className="parent-element"><h2>What is Parcel?</h2><p className='answer-section'>Parcel is a fast and easy-to-use web application bundler.
Parcel takes all your project files (like HTML, CSS, JS, images), bundles them together, and optimizes them to run efficiently in the browser — with zero configuration needed.</p></div>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(headingElement)

import ReactDOM from 'react-dom/client';