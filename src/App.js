import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import itemDetail from "./itemDetail";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';






const  App=()=>{
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/" exact component={Home} /> 
     <Route path="/About" component={About} />   
     <Route path="/Shop"exact component={Shop} />
     <Route path="/Shop/:id" component={itemDetail} />
     
     </Switch>
    </div>
    </Router>
  );
}

const Home =()=>{
  return(
  <div>
    <h1>Home Page</h1>
  </div>
  );
}

export default App;
