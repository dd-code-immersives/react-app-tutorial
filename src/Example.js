import React, { useState, useEffect } from 'react';


//functional component using hooks
function Example() {
    // Declare a new state variable, which we'll call "count"
    // we pass 0 because it is the default value

    //hooks are more precise about what variable we are 
    //updating and is "hooked" to the state
    const [count, setCount] = useState(0);

     // Similar to componentDidMount and componentDidUpdate:
     // in other words, run this code when the component changes
     // works like a trigger
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

// Example as arrow function 
const ExampleArrow = (props) => {
    // You can use Hooks here!
    return <div />;
  }

//equivalent class component example
class ExampleClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }



export default Example