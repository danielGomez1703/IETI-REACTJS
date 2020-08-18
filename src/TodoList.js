import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
            const list = this.props.todoList.map((todo,index) =>
                <th key={index}>
                   <Todo text={todo.text} priority={todo.priority} fecha={todo.dueDate}/>
                 </th>
            );
            return (
                <tr> {list} </tr>
            );
        }
}
export default  TodoList;