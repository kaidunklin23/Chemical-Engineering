import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Skills from './components/Skills';
import Problem from './components/Problem';
import Life from './components/Life';
import Home from './components/Home'

class App extends Component{
render(){
  return (
  <BrowserRouter>
     
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Skills' component={Skills}/>
        <Route path='/Problem' component={Problem}/>
        <Route path='/Life' component={Life}/>
      </Switch>

   
    </BrowserRouter>
  );
  }
  
}


export default App;
