import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';
import TodoForm from './componets/TodoForm';
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({ todos: [...todos, todo]});
  }
  removeTodo(index) {
    if (window.confirm("Are you sure?")) {
      this.setState({ todos: this.state.todos.filter((t, i) => i !== index)});
    }
    
  }
  render() {
    const tasks = this.state.todos.map((todo, index) => {
      return (
        <div className="col-md-4" key={index}>
          <div className="card my-2">
            <div className="card-header">
              <h3>
                { todo.title }
              </h3>
              <span className="badge badge-pill badge-danger mx-2">
                { todo.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ todo.description }</p> 
              <mark>{ todo.responsible }</mark> 
            </div>
            <div className="card-footer">
              <button 
                className="btn btn-danger" 
                onClick={this.removeTodo.bind(this, index)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <nav className="navbar navbar-dark bg-dark text-white">
            <ul className="navbar-nav">
              <li className="nav-item">
                Tasks - 
                <span className="badge badge-pill badge-danger mx-2">
                   { this.state.todos.length } 
                </span>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container">
          <div className="row my-2">
            <TodoForm onAddTodo={this.addTodo}/>
          </div>
          <div className="row my-2">
            { tasks }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
