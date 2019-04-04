import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Log from './Login';

class App extends Component {

  constructor(){
    super();
    this.state = {
      dummyData: [],
    }
    console.log("constructing data");
  }



  render() {
    return (
      <div className="App">
        <Log/>
      </div>
    );
  }
}

export default App;
