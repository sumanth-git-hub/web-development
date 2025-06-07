import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const appendRoot = createRoot(document.getElementById("root"))
appendRoot.render(<App />)