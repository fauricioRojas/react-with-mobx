import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      todoTitle: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.todoTitle.length) {
      this.props.addTodo(this.state.todoTitle);
      this.setState({
        todoTitle: ''
      });
    }
  }

  render() {
    const { todoTitle } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text"
          className="form-control"
          value={todoTitle}
          onChange={this.onInputChange}
          placeholder="What needs to be done?" />
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
