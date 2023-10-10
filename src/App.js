import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation.js';
import {Main} from './components/main.js';
import Footer from './components/footer.js';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
        <Router>
            <div className="App">
              <Navigation />
              <Main />
              <Footer />
            </div>
        </Router>
  );
}

export default App;