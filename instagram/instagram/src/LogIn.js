import React, { Component } from 'react';
import dummyData from './dummy-data';
import instagram from './Components/Images/InstagramText.png';
import PostContainer from './Components/PostContainer/Posts';
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
            dummyData: dummyData,
        });
    }

    ToggleClick = e => {
        this.setState({ show: !this.state.show });
        this.setState({ username: "" });
        this.setState({ password: "" });
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleLoginSubmit = e => {
    const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    componentDidMount() {
        this.setState({
          dummyData: dummyData,
        });
        console.log("mounting data");
    }
      
    
    addLikes= (username) => {
        this.setState({
            dummyData: this.state.dummyData.map(post => {
                if (post.username === username ) {
                    const newPost = {...post}
                    newPost.likes += 1
                    return newPost
                }
                return post
            })
        });
    } 
    
    comment= (username, newComment, e) => {
        e.prevetDefault();
        console.log(username, newComment);

    } 

    render() {
    
        return (
            <Bottom div className='App'>
                { this.state.show ? <P>{<PostContainer posts={this.state.dummyData} addLikes={this.addLikes} comment={this.comment}/> }</P> : 
                <Div className='loginPage'>
                    <Insta>
                        <img src={instagram} />
                    </Insta>
                    <Box>
                        <h2>Username:</h2>
                        <form onSubmit={this.handleLoginSubmit}>
                            <input
                                type='text'
                                name='username'
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                placeholder='Username'
                            />
                        </form> 
                    </Box>
                    <Box2>
                        <h2>Password:</h2>
                        <form onSubmit={this.handleLoginSubmit}>
                            <input
                                type='text'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                placeholder='Password'
                            />
                        </form>
                    </Box2>
                </Div>}
                <Button primary onClick={this.ToggleClick}>{ this.state.show ? 'Log Out' : 'Log In' }</Button> 
            </Bottom>
        );
    }
}

const P = styled.div`

`;

const Insta = styled.div`
    margin-top: 50px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: auto;
`;

const Button = styled.text`
    display: flex;
    justify-content: center;
    height: 30px;
    width: 38%;
    background-color: black;
    color: white;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    align-items: center;
    :hover{
        color: black;
        background-color: white;
        transition: .5s;
        border: 3px solid black;
    }
    background: linear-gradient(270deg, #ff0000, #ff8900, #eaff43, #59d052, #0ee8e0, #7d0ee8);
    background-size: 1200% 1200%;

    -webkit-animation: AnimationName 25s ease infinite;
    -moz-animation: AnimationName 25s ease infinite;
    animation: AnimationName 25s ease infinite;

    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
        @keyframes AnimationName { 
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
`;

const Box = styled.div`
    border: 3px solid black;
    padding: 10px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    color: white;
    width: 96%;
    background-color: rgb(48, 48, 48);
    :hover{
        background-color: white;
        color: black;
        transition: .5s;
        border: 3px solid black;
    }
`;

const Box2 = styled.div`
    border: 3px solid black;
    padding: 10px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    color: white;
    width: 96%;
    background-color: rgb(48, 48, 48);
    :hover{
        background-color: white;
        color: black;
        transition: .5s;
        border: 3px solid black;
    }
`;

const Div = styled.div`
    margin: 0 auto;
    justify-conetent: center;
`;

export default Log;