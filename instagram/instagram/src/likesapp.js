import React, { Component } from 'react';
import heart from './src/heart.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
}

IncrementItem = () => {
  this.setState({ clicks: this.state.clicks + 1 });
}

render() {
    return (
      <div>
        <button onClick={this.IncrementItem}><img className='heart'src={heart} /></button>
        { this.state.show ? <p>{ this.state.clicks } likes </p> : '' }
      </div>
    );
    }
}

export default App;