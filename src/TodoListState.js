import React from 'react';

class TodoListState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], currentValue: '' };
  }

  render() {
    return (
      <div className="sv-row">
        <div className="sv-column" />
        <div className="sv-column">
          <h2 className="sv-text-center">TO-DO List</h2>
          <form
            className="sv-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.setState({
                currentValue: '',
                todos: this.state.todos.concat(this.state.currentValue),
              });
            }}
          >
            <input
              type="text"
              value={this.state.currentValue}
              onChange={(e) => this.setState({ currentValue: e.target.value })}
            />
          </form>
          <ul>
            {this.state.todos.map((todo, idx) => (
              <li
                key={idx}
                className="sv-pointer"
                onClick={() => this.setState({ todos: this.state.todos.filter((val, valIdx) => idx !== valIdx) })}
              >
                {todo}
              </li>
            ))}
          </ul>
        </div>
        <div className="sv-column" />
      </div>
    );
  }
}

export default TodoListState;
