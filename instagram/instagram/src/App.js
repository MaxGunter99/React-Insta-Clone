import React, { Component } from 'react';
import Info from './Components/dummy-data';
import PostContainer from './dataLayout';
import dummyData from './Components/dummy-data';
import ConditionalRender from './Auth/Authenication';
import Log from './test';

class App extends Component {

  constructor() {
    super();
    this.state = {
      dummyData: [],
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: Info,
    });
  }

  render() {
    
    return (
      <div className="App">
        <Log />
      </div>
    );
  }
  
}



export default App;
