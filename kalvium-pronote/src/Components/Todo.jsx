import { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      todos: [],
    };
  }
  handleChange = (event) => {
    let userInput = event.target.value;
    this.setState({ inputText: userInput });
  };
  handleClick = () => {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, this.state.inputText],
      inputText: "",
    });
  };

  update = (index) => {
    let updateInput = prompt("Update todo..!!");
    let filtertodos = this.state.todos.map((el, i) => {
      if (i == index) {
        return updateInput;
      }
      return el;
    });
    this.setState({ ...this.state, todos: filtertodos });
  };
  delete = (index) => {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ ...this.state, todos });
  };
  render() {
    return (
      <>
        <h1>Todo App</h1>
        <div className="main-container">
            <div className="input-container">
          <input className="inputUser"
            type="text"
            placeholder="Please Add Your Daily Task?"
            onChange={this.handleChange}
            value={this.state.inputText}
          ></input>
          <button onClick={this.handleClick}>Add Todo</button>
          </div>
          
          {this.state.todos.map((el, i) => {
            return (
              <div className="todo-update-delete-container" key={i}>
                
                    <p>{el}</p>
                    <div className="todo-item">
                <button
                  onClick={() => {
                    this.update(i);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    this.delete(i);
                  }}
                >
                  Delete
                </button>
                </div>
              </div>
              
            );
          })}
        
        </div>
      </>
    );
  }
}
export default Todo;
