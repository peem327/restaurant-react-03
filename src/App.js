import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Product from "./container/product/Product";
import Category from "./container/product/Category";
import Navbar from "./components/header/Navbar";
import Footer from "./components/Footer";
import About from "./container/About";
import Contact from "./container/contact";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/category/:categories" component={Category} />
          <Route exact path="/category/product/:id" component={Product} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
