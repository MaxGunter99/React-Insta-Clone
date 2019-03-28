import React, { Component } from 'react';

import Auth from './Authenication';
import Log from '../LogIn';
import PostContainer from '../dataLayout';

class App3 extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ConditionalView />
      </div>
    );
  }
}

const ConditionalView = Auth(PostContainer)(Log);
// export default App3;
