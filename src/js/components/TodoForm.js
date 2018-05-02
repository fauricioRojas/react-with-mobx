import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { observer } from 'mobx-react';

@observer
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
    const { store } = this.props;
    e.preventDefault();
    store.addTodo(this.state.todoTitle);
    this.setState({
      todoTitle: ''
    });
  }

  render() {
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
};

TodoForm.propTypes = {
  store: PropTypes.object.isRequired
};

export default TodoForm;
 