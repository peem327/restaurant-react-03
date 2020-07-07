import React, { Component } from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from'./components/Header/Header';
import Home from './container/Home';
import Product from './container/product/Product'
import Footer from './components/Footer'

import './App.css'

export class App extends Component {



  render() {
    return (
      <Router>
        <div>
        <Header/>

        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path ="/product/:id" component={Product}/>
        </Switch>
       

        <Footer/>
        </div>
        </Router>
    )
  }
}

export default App
