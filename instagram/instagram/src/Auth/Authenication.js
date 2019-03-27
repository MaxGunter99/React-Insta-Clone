import React from 'react';
import ReactDOM from 'react-dom';

import FirstComponent from './first';
import SecondComponent from './second';
import withConditionalRender from './render';

const ConditionalRender = withConditionalRender(FirstComponent)(
  SecondComponent
);
class App extends React.Component {
  state = {
    showFirst: true
  };

  toggleComponents = () => {
    if (!this.state.showFirst) {
      localStorage.setItem('showFirst', true);
    } else {
      localStorage.removeItem('showFirst');
    }
    this.setState({ showFirst: !this.state.showFirst });
  };

  render() {
    return (
      <div className="App">
        {/* Render the component that is created with our HOC right here */}
        <ConditionalRender />
        <button onClick={this.toggleComponents}>Toggle Components</button>
      </div>
    );
  }
}

// Create a HOC that conditionally renders one component or another component

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// localStorage.setItem('itemName', value)
// localStorage.getItem('itemName');
// localStorage.removeItem('itemName');
// localStorage.clear();