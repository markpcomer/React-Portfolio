import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM client-specific methods
import App from './App.jsx'; // Importing the root component App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './index.css'; // Importing custom CSS for styling

// Using ReactDOM.createRoot to create a root instance for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the root component (App) into the root instance
root.render(<App />);

