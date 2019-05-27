import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Routes } from './routes/Routes';
import history from './history'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router history={history}>
          <Navbar />
          <Routes />
        </Router>
      </div>
    )
  }
}

export default App
