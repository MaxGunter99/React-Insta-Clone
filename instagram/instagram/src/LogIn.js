import React, { Component } from 'react';
import dummyData from './Components/dummy-data';
import PostContainer from './dataLayout';
import instagram from './src/InstagramText.png';
import Info from './Components/dummy-data';
import '/Users/voidchaser/Lambda/React-Insta-Clone/instagram/instagram/src/index.css';
import '/Users/voidchaser/Lambda/React-Insta-Clone/instagram/instagram/src/comments.css';
import styled, { css } from 'styled-components'

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      show: false,
      username: '',
      password: ''
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

  handleInputChange = e => {
    this.setState({ [e.targetname]: e.target.value})
  }

  
  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  }

  render() {
    
    return (
      
      <div className='App'>
        { this.state.show ? <p>{ <PostContainer dummyData={this.state.dummyData} /> }</p> : 
        <div className='loginPage'>
          <img src={instagram} />
          <H2>Username</H2>
          <form>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder='Username'
            />
          </form> 
          <H2>Password</H2>
          <form>
            <input
              type='text'
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder='Password'
            />
          </form> 
        </div>}
        <Button primary onClick={this.ToggleClick}>{ this.state.show ? 'Log Out' : 'Log In' }</Button> 
      </div>
    );
  }
}

const Button = styled.button`

  ${props => props.primary && css`
    height: 30px;
    border-radius: 10px;
    font-size: 15px;
    color: white;
    background-color: black;
  `}
`;

const H2 = styled.text`
  display: flex;
  margin-bottom: 0;
  justify-content: flex-start;
  margin-left: 130px;
  font-size: 20px;
  
`;

export default Log;