import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals(); //  use -> Web performance is vital for a positive user experience. 
//Faster and responsive apps lead to happier users who stay longer. By using reportWebVitals() in React, we monitor key metrics to optimize performance and ensure satisfied users.
