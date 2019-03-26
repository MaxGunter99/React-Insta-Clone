import React from 'react';
import TodoList from './commentList';
import TodoForm from './commentForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    };
}

addTodo = event => {
    event.preventDefault();
    const newTodo = {task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
};

changeTodo = event => this.setState({ todo: event.target.value });
toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
            return todo;
        } else {
            return todo;
        }
    });
    this.setState({ todos });
};

clearCompletedTodos = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos: todos });  
};

render() {
    return (
      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}         
        />
        <TodoForm      
          value={this.state.todo}         
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;