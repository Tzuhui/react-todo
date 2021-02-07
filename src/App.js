// import logo from './logo.svg';
import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navs from './components/Nav/Nav';
import TodoList from './view/ToDo/TodoList';
import About from './view/About/About';
import './assets/stylesheets/all.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navs />
        <Route path="/" component={TodoList} />
        <Route path="/about" exact component={About} />
      </BrowserRouter>
    )
  }
}

export default App;
