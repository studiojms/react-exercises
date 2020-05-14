import React from 'react';
import { observer } from 'mobx-react';

import ToDoListStore from './ToDoListStore';

//https://tombuyse.be/blog/using-mobx-decorators-in-create-react-app-v3
@observer
class TodoListMobx extends React.Component {
  constructor(props) {
    super(props);
    this.store = ToDoListStore;
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
          <ul>
            {this.store.todos.map((todo, idx) => (
              <li key={idx} className="sv-pointer" onClick={() => this.store.removeToDo(idx)}>
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

export default TodoListMobx;
