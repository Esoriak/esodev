import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Favicon from 'react-favicon';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Esodevlogo from './Utils/Assets/favicon3.png'
import Contact from './Screens/Contact';
import History from './Screens/History';

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={Esodevlogo} />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="history" element={<History />} />
      <Route path="contact" element={<Contact />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
