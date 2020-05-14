import React from 'react';
import { observer } from 'mobx-react';
import ToDoListApiStore from './ToDoListApiStore';

@observer
class TodoListMobxApi extends React.Component {
  constructor(props) {
    super(props);
    this.store = ToDoListApiStore;
  }

  componentDidMount() {
    this.store.list();
  }

  render() {
    return (
      <div className="sv-row">
        <div className="sv-column" />
        <div className="sv-column">
          <h2 className="sv-text-center">TO-DO List Mobx</h2>
          <form
            className="sv-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.store.addToDo();
            }}
          >
            <input
              type="text"
              value={this.store.currentValue}
              onChange={(e) => this.store.changeCurrentValue(e.target.value)}
            />
          </form>
          <ul className="sv-list-styled sv-ml--20">
            {!this.store.loading &&
              this.store.todos.map((todo) => (
                <li key={todo.id} className="sv-pointer" onClick={() => this.store.removeToDo(todo.id)}>
                  {todo.descricao}
                </li>
              ))}
            {this.store.loading && (
              <div className="sv-text-center sv-mt--20">
                <span className="sv-bar-loader large" />
              </div>
            )}
          </ul>
        </div>
        <div className="sv-column" />
      </div>
    );
  }
}

export default TodoListMobxApi;
