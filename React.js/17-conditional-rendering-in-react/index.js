import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App";

const appendMain = createRoot(document.getElementById("root"))

appendMain.render(<App />)