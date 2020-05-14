import { observable, configure, action } from 'mobx';

configure({ enforceActions: 'observed' });

class ToDoListStore {
  @observable
  todos = [];

  @observable
  currentValue = '';

  @action
  addToDo() {
    this.todos.push(this.currentValue);
    this.currentValue = '';
  }

  @action
  removeToDo(idx) {
    this.todos = this.todos.filter((item, todoIdx) => todoIdx !== idx);
  }

  @action
  changeCurrentValue(newValue) {
    this.currentValue = newValue;
  }
}

export default new ToDoListStore();
