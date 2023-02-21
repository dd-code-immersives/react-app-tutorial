/**
 * Table React Component 
 * 
 */

/**
 * HTML REVIEW
 * thead -> table head 
 * tr -> table row 
 * th -> table header 
 * tbody -> table body
 * td -> table cell
 */

import React, { Component } from "react";

/*
create two simple function components to make
our table code more readable
*/

//TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
    return (
        <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
              </tr>
            </thead>
    );
}

//TABLE BODY SIMPLE COMPONENT 
const TableBody = (props) => {

    //construct rows
    // use map to iterate over each row and wrap it in
    // a html table row  
    const rows = props.data.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      )
    })
    //return rows wrapped in tbody
    return <tbody>{rows}</tbody>
  }
// TABLE is our main Component
class Table extends Component {
    render() {
        //read props passed in from App.js
        const { characterData } = this.props;

        return (
          <table>
            <TableHeader/>
            <TableBody data={characterData} />
          </table>
        )
      }
}

export default Table