import React, {Component} from 'react';
import DisplayTodos from './DisplayTodos';
import AddTodoForm from './AddTodoForm';

class App extends Component {
  
  state = {
    todos: [
      {id:1, content: 'buy milk'},
      {id:2, content: 'Sail'}
    ]
  }

deleteTodo = (id) => {
  // console.log(`delete ${id}`);
   const todos = this.state.todos.filter( todo => {
     return todo.id !== id;
   })

   this.setState({
     todos
   })
  
}

addTodo = (todo) => {
  todo.id = Math.random();
  const todos = [...this.state.todos, todo];
  this.setState({
    todos
  })
}

 render() {
   return (
     <div className="todo-app Container">
        <h1 className = 'center blue-text'>Todo's</h1>
          <DisplayTodos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodoForm addTodo={this.addTodo}/>
      </div>
    ); 
  }

}


export default App;
