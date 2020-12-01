import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';


const list = [
  {
    task: "test",
    id: 0,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {list};
  }

  handleToggle = (itemId) => {
    this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return({
            ...item,
            completed: !item.completed
          });
        } else {
          return(item);
        }
      })
    });
  }

  handleAdd = task => {
    console.log(task);
    this.setState({
      list: [...this.state.list, { task: task, id: Date.now(), completed:false }]
    });
    // console.log(this.state);
  }

  handleCompleted = () => {
    this.setState({
      list: this.state.list.filter(item=>(!item.completed))
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList handleCompleted={this.handleCompleted} list={this.state.list} handleToggle={this.handleToggle} />
      </div>
    );
  }
}

export default App;
