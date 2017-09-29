import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Wrapper from './components/wrapper/wrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        //Page Header
        <Header />
        //Wrapper Component, consisting all the page elements
        <Wrapper />
      </div>
    );
  }
}

export default App;
