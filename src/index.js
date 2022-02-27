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
import Home from './Screens/Home';
import Portfolio from './Screens/Portfolio'

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={Esodevlogo} />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
       <Route path="History" element={<History />} />
       <Route path="Portfolio" element={<Portfolio />} />
       <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route
          path="*"
          element={
           <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
            </main>
          }
        />
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
