import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(item => (
      <TodoItem
        key={item.id}
        todo={item}
        toggleCompleted={this.props.toggleCompleted}
        delete={this.props.delete}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
};

export default Todos;
