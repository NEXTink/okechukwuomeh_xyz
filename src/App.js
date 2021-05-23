import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import './sass/source.css';
import Home from "./pages";
import React from "react";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Journey from "./pages/journey";


function App() {
  return (
    <Router>
      <Switch>

          <Route exact path='/' component={Home}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/projects/:project' component={Projects}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/journey' component={Journey}/>
          {/*<Route exact path='/stack' component={Journey}/>*/}
      </Switch>


    </Router>
  );
}

export default App;
