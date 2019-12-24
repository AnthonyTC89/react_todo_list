import React, {Component} from 'react';

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
    console.log('writing..');
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

  render() {
    return (
      <form className="w-25 mx-auto" onSubmit={this.handleSubmit}>
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
        <input 
          type="textArea" 
          className="form-control" 
          name="description" 
          onChange={this.handleInput}
          placeholder="Description"/>
        <button type="submit" className="btn btn-primary">Save Task</button>
      </form>
    );
  }
}


export default TodoForm;
