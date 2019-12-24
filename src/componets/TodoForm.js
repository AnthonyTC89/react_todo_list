import React, {Component} from 'react';
import './TodoForm.css';
class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'normal'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    document.querySelector(".todo-form").reset();
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <h2 className="text-white">
          New Task
        </h2>
        <input 
          type="text" 
          className="form-control" 
          name="title" 
          onChange={this.handleInput}
          placeholder="Title"/>
        <input 
          type="text" 
          className="form-control" 
          name="responsible" 
          onChange={this.handleInput}
          placeholder="Responsible"/>
        <textarea 
          rows="3"
          className="form-control" 
          name="description" 
          onChange={this.handleInput}
          placeholder="Description">
        </textarea>
        <select className="custom-select">
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
        <button type="submit" className="btn btn-primary">Save Task</button>
      </form>
    );
  }
}


export default TodoForm;
