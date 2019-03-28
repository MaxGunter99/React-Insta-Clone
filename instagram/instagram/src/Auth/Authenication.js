import React from 'react';


const Auth = PostContainer => Log =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      console.log('mounting')
      if (!localStorage.getItem('user')){
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true })
      }
    }
    render() {
      if (this.state.loggedIn) return <PostContainer />;
      return <Log/>;
    }
  };

  // export default Auth;
