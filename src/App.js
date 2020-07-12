import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Institutes from "./components/Institutes";
import Pages from "./components/Pages";
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const bannerCSSWidth = "banner inner-banner";
  return (
    <div>
      <Router>
        <header>
            <Header bannerCSS={bannerCSSWidth} />
        </header>
        <section style={{outerHeight:300}}>
          <Switch>
              <Route path="/" exact component= {Main} />
              <Route path="/about/"  exact component={About} />
              <Route path="/courses" exact component={Courses} />
              <Route path="/institutes" exact component={Institutes} />
              <Route path="/contact" exact component={Contact} />
              <Route exact component={NotFound} />
          </Switch>
        </section>
        <footer>
              <Footer />
        </footer>
      </Router> 
    </div>
  );
}

export default App;
