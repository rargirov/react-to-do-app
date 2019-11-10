import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  btnStyle = {
    background: "#ff0000",
    color: "reds",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  };

  style = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.style()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleCompleted.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.delete.bind(this, id)}
            style={this.btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
};

export default TodoItem;
