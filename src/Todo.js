import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
    
        return (
        
        <tr>
          <td>   {this.props.text} </td>
          <td>   {this.props.priority} </td>
          <td> {this.props.fecha.toString()} </td>
        </tr>
  
        );
    }
}
export default Todo