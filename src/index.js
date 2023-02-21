import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class-based component called App
//extends inherits from React.Component 
// in other words: tells App to behave like a component.
class App extends Component {

  // you always have a render function
  // in a component. 
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))