import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Institutes from "./components/Institutes";
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Home from './components/Home';
import DisplayRegisterUser from './components/DisplayRegisterUser';


function App() {
  return (
    <div>
      <Router>
        {/* <header>
            <Header bannerCSS="banner" />
        </header> */}
        {/* <section style={{outerHeight:300}}> */}
        <section>
          <Switch>
              <Route path="/" exact component= {Home} />
              <Route path="/about"  exact component={About} />
              <Route path="/courses" exact component={Courses} />
              <Route path="/institutes" exact component={Institutes} />
              <Route path="/desplayregisteruser" exact component={DisplayRegisterUser} />
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
