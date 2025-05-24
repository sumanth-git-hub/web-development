import React from "react";
import {createRoot} from 'react-dom/client'
import App from './App'
import styles from './style.css'

const h2 = <h2>Hello World!!!</h2>


const appendChild = createRoot(document.getElementById('root'))
appendChild.render(<App/>)