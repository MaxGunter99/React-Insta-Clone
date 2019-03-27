import React, { Component } from 'react';
import dummyData from './Components/dummy-data';
import PostContainer from './dataLayout';
import Info from './Components/dummy-data';
import '/Users/voidchaser/Lambda/React-Insta-Clone/instagram/instagram/src/index.css';
import '/Users/voidchaser/Lambda/React-Insta-Clone/instagram/instagram/src/comments.css';

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      show: true
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: Info,
    });
  }

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  LoggingIn = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    
    return (
      
      <div className='App'>
        <button className='lookAtMe' onClick={this.ToggleClick}>
          { this.state.show ? 'Log Out' : 'Log In' }
        </button>
        { this.state.show ? <h2>{ <PostContainer dummyData={this.state.dummyData} /> }</h2> : '' }
      </div>
    );
  }
}

console.log(dummyData);

export default Log;