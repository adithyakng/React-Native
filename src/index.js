import React from "react";
import { render } from "react-dom";
// import Hello from './Hello';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Todo = function(props) {
  return (
    <div>
      <span>{props.todo.text} </span>
      <button onClick={props.ondel}>Delete</button>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={props.ontg}
      />
    </div>
  );
};
let id = 1;
class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  addTodo() {
    const text = prompt("Please enter the todo name");
    this.setState({
      todos: [...this.state.todos, { text: text, checked: false, id: id++ }]
    });
  }
  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  toggleCheckbox(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          text: todo.text,
          checked: !todo.checked,
          id: todo.id
        };
      })
    });
  }
  render() {
    return (
      <div>
        <div>Number of Todos: {this.state.todos.length}</div>
        <div>
          Number of UnChecked Todos:{" "}
          {this.state.todos.filter(todo => todo.checked === false).length}
        </div>
        <button onClick={() => this.addTodo()}>Add Todo </button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              todo={todo}
              ondel={() => this.deleteTodo(todo.id)}
              ontg={() => this.toggleCheckbox(todo.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
const App = function() {
  return <h1>hi</h1>;
};
render(<App1 />, document.getElementById("root"));
