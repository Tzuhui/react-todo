// import logo from './logo.svg';
import React, {Component} from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import './assets/stylesheets/all.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, text: 'Write Some Code', active: false },
        { id: 2, text: 'Running', active: false },
        { id: 3, text: 'Play Baskebtall', active: false },
      ],
      filterType: 'all',
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }
  addTodo() {
    this.setState(state => {
      const todos = [...state.todos, {
        id: 4,
        text: state.inputValue,
        active: false
      }];
      state.inputValue = '';
      return {
        todos,
      };
    });
  }
  render() {
      return (
        <div class="container">
        <Header/>
        <div class="input-group my-3">
          <input type="text" class="form-control" placeholder="新增 Todo" value={this.state.inputValue} onChange={this.handleChange} />
          <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={() => this.addTodo()}>Add</button>
        </div>
        <div class="btn-group mb-3" role="group" aria-label="Basic outlined example">
          <button type="button"
            className={'btn btn-outline-primary ' + (this.state.filterType === "all" ? "active" : "")}
            onClick={() => this.setState({ filterType: 'all' })}>全部</button>
          <button type="button" class="btn btn-outline-primary"
            className={'btn btn-outline-primary ' + (this.state.filterType === "left" ? "active" : "")}
            onClick={() => this.setState({ filterType: 'left' })}>未完成</button>
          <button type="button" class="btn btn-outline-primary"
            className={'btn btn-outline-primary ' + (this.state.filterType === "completed" ? "active" : "")}
            onClick={() => this.setState({ filterType: 'completed' })}>完成</button>
        </div>
        <ul class="list-group">
          {this.state.todos.map((value) => {
            return <Todo data={value} id={value.id} />
          })}
        </ul>
        <p class="mt-3"> 共有 {this.state.todos.length} 項任務</p>
      </div>
      );
  }
}

export default App;
