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
    console.log('<TodoForm />');
    const { todoTitle } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        New Todo:
        <input type="text"
          value={todoTitle}
          onChange={this.onInputChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
