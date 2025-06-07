import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App";
const appendChild = createRoot(document.getElementById("root"))
appendChild.render(<App />)