import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import History from './Screens/History';
import Portfolio from './Screens/Portfolio';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import favicon from './Utils/Assets/Esodevlogo.png'
import Favicon from 'react-favicon';

function App() {
  return (
    <div className="App">
      <Favicon url={favicon} />
      <Router>
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/contact-me" component={Contact} />
          <Route path="/history" component={History} />
          <Route path="/portfolio" component={Portfolio} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
