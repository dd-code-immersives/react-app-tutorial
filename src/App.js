import React, { Component } from 'react';

/* class-based component called App
   extends inherits from React.Component 
   in other words: tells App to behave like a component. 
*/
import Table from './Table' 




class App extends Component {

    state = {
        characters: [{
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
    }

    // create simple function here to remove character
    removeCharacter = (index) => {
    //now that we've defined this.state, we can use 
        const { characters } = this.state 

        // we can use setState to update the state 
        this.setState({
            // remove character at passed in index by returning 
            // a new list excluding that character
            characters: characters.filter((_, i) => {
                return i !== index
            }),
        })
    }

    /* you always have a render function
     in a component. */ 
    render() {

      // make sure return only returns one html element!  
      // we are passing the characters from state
      // and the removeCharacter function that we wrote
      // so table can use it later on 
      return (
        <div className="container"> 
          <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}  /> 
        </div>
      )
    }
  }

// make it accessible to the rest of your application
export default App