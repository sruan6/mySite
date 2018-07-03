import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Waypoint from 'react-waypoint';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    message: null,
  };
  componentDidMount(){
    const ele = document.getElementById('loader');
    if(ele){
      setTimeout(() => {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = '';
        }, 1000)
      }, 1000)
    }
  }
  _setMessage = () => {
    this.setState({
      message: "Waypoint entered"
    })
  };


  render() {
    return (
      <Router>
      <div className="App">
        <Route 
          exact path='/' 
          component={About} 
        />
        <Route 
          exact path='/About' 
          component={About} 
        />
        <Route 
          exact path='/Work' 
          component={Work} 
        />
        <Route 
          exact path='/Contact' 
          component={Contact}
        />
      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
