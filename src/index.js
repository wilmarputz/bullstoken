import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing App component which includes your routes and layout

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Points to the div with id 'root' in your index.html
);

