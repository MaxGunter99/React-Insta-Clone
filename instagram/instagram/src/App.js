import React, { Component } from 'react';
import dummyData from './dummy-data';
import Log from './Login';
import styled, { css } from 'styled-components'

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
        <Loging>
          <Log/>
        </Loging>
      </div>
    );
  }
}

const Loging = styled.div`
  width: 100%;
  background-color: lightgrey;
  justify-contet: center;
`;

export default App;
