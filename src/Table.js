/**
 * Table React Component 
 * 
 */

import React, { Component } from "react";

class Table extends Component {
    /**
     * HTML REVIEW
     * thead -> table head 
     * tr -> table row 
     * th -> table header 
     * tbody -> table body
     * td -> table cell
     */
    render() {
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Charlie</td>
                <td>Janitor</td>
              </tr>
              <tr>
                <td>Mac</td>
                <td>Bouncer</td>
              </tr>
              <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
              </tr>
              <tr>
                <td>Dennis</td>
                <td>Bartender</td>
              </tr>
            </tbody>
          </table>
        )
      }
}

export default Table