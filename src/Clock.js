import React, { Component } from 'react';

 class Clock extends Component {

    // add a constructor
    // add local state (inside a component )
    // this is called when the Clock Component is created
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

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
