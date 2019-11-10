import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";
import axios from "axios";
import "./App.css";
import { apiUrl } from "./common/constants";
import Contacts from "./components/pages/Contacts";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get(`${apiUrl}?_limit=1`)
      .then(res => this.setState({ todos: res.data }));
  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delete = id => {
    axios.delete(`${apiUrl}/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  add = content => {
    axios
      .post(apiUrl, {
        title: content,
      })
      .then(r => {
        r.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, r.data] });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <AddTodo add={this.add} />
                  <Todos
                    todos={this.state.todos}
                    toggleCompleted={this.toggleCompleted}
                    delete={this.delete}
                  />
                </>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
