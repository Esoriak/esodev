import * as React from "react";
import './App.css';
import Header from './Components/Header';
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";


const App = () => {

  return (
    <div className="App">
      <Header />
      <div className="content-home">
        <Navbar />
        {/* <div style={{ backgroundColor: 'black', width: '30%', height: '500px', }}>
      
        </div> */}
      </div>
    </div>
  );
}

export default App;
