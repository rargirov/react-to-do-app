import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "underscore";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const title = this.state.title.trim();
    if (!isEmpty(title)) {
      this.props.add(title);
      this.setState({ title: "" });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          id="new-todo"
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add new one..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  add: PropTypes.func.isRequired
};

export default AddTodo;
