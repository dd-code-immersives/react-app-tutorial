import React, { Component } from 'react';

 class Clock extends Component {

    // 1.
    // add a constructor
    // add local state (inside a component )
    // this is called when the Clock Component is created
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    // 3.
    // runs after the component output has been rendered to the DOM.
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick()
        );
    }
    // 4. 
    // happens after  when component is destroyed
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // local helper function to get time
    tick() {
        this.setState({ date: new Date()});
    }

    // 2. The Component is rendered
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
  }

export default Clock
