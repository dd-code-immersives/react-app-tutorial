import React, { Component } from 'react';

/* class-based component called App
   extends inherits from React.Component 
   in other words: tells App to behave like a component. 
*/
import Table from './Table' 



const characters = [
    {
    name: 'Charlie',
    job: 'Janitor',
    },
    {
    name: 'Mac',
    job: 'Bouncer',
    },
    {
    name: 'Dee',
    job: 'Aspring actress',
    },
    {
    name: 'Dennis',
    job: 'Bartender',
    },
]

class App extends Component {

    /* you always have a render function
     in a component. */ 
    render() {

      // make sure return only returns one html element!  
      return (
        <div className="container"> 
          <Table characterData={characters} /> 
        </div>
      )
    }
  }

// make it accessible to the rest of your application
export default App