import React, { Component } from 'react';
import './App.css';
import Info from './Components/dummy-data';
import PostContainer from './Components/dataLayout';
import dummyData from './Components/dummy-data';
import TodoList from './Components/commentList';
import TodoForm from './Components/commentForm';


class App extends Component {

  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: Info
    });
  }

  render() {
    
    return (
      <div className="App">
        <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
  
}


export default App;
