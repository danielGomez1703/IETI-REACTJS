import React from 'react';
import TodoList from './TodoList'
import Clock from './Clock'
import Todo from './Todo';
import './TodoApp.css';

class TodoApp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          items: this.props.todoList, 
          text: '',
          priority: '',
          fecha : ''
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    render() {
        var itemsTodo = [];
        this.state.items.forEach(function (item,index) {
            itemsTodo.push(<Todo key={index} text={item.text} priority={item.priority} fecha={item.dueDate} />)
        });
    return (
      <div className = 'TodoApp'>
            <label>
                <Clock />
            </label>
            <hr />
          
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
                    What needs to be done?
          </label>
           <br/>
          <label> Text for todo  :
            <input id="text" name='text' onChange={this.handleChange} value={this.state.text} />
                </label>
                <br />
                <br />
          <label> Priority for todo :  
             <input id="priority" type= 'number' name='priority' onChange={this.handleChange} value={this.state.priority} />
          </label>
                <br />
                <br />
                Date for todo :
                <input id="priority" type='date' name='fecha' onChange={this.handleChange} value={this.state.fecha} />
                <br />
                <br />
                <center>
                    <button type="submit" className='btn btn-primary'> Add #{this.state.items.length + 1} </button>
                </center>
            </form>
            <hr/>
            <h3>Todos List</h3>
            <br/>
            <table className='table'>
                    <tr>
                        <th> text </th>
                        <th> priority </th>
                        <th> Date </th>
                    </tr>
                
                    { itemsTodo }
             </table>
      </div>
    );
  }

  handleChange(e) {
      console.log(e.target);
      var property = e.target.name
      this.setState({ [property] : e.target.value });
  }

  handleSubmit(e) {
      e.preventDefault();

      if (!this.state.text.length || this.state.priority.lenght) {
          return;
      }
      
      const newItem = {
          text: this.state.text,
          priority: this.state.priority,
          dueDate: new Date(this.state.fecha)
      };
      console.log(newItem);
        this.setState(prevState => ({
          items: prevState.items.concat(newItem),
          text: '',
          priority:''
        }));
      }
  }
  export default TodoApp;

