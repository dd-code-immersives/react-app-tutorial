import React, { Component } from 'react';

/* class-based component called App
   extends inherits from React.Component 
   in other words: tells App to behave like a component. 
*/
import Table from './Table' 
import Form from './Form'
import Clock from './Clock'

//components can also be functional 
// {} evaluate javascript code
function Welcome(props){
  return <h1>Welcome, {props.name}</h1>
}


class App extends Component {
    // set initial state of component 
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

    // create simple method here to remove character
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

    // // create method to add a character 
    // addCharacter = (name_, job) => {

    //   this.characters.push({name: name_, });
    //   this.setState({
    //     characters: this.characters
    //   });
    // }

    //we add the handle submit here , because 
    //the characters are in here 
    // NOTE ON SYNTAX: passing a character to addCharacter 
    // using (...) spread operator to unpack characters array and adding
    // a new character
    addCharacter = character => {
      this.setState({characters: [...this.state.characters, character ]})
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
          <Welcome name="Dom"/>
          <Clock />
          <Table 
            characterData={this.state.characters} 
            removeCharacter={this.removeCharacter} 
          /> 
          <Form addCharacter={this.addCharacter}/>
        </div>
      )
    }
  }




// make it accessible to the rest of your application
export default App