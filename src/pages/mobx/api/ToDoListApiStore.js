import { observable, configure, action, runInAction } from 'mobx';

import ToDoListService from './ToDoListService';

configure({ enforceActions: 'always' });

class ToDoListApiStore {
  @observable
  todos = [];

  @observable
  currentValue = '';

  @observable
  loading = false;

  @action
  async list() {
    try {
      this.loading = true;
      const response = await ToDoListService.list();
      runInAction(() => {
        this.todos = response.data;
      });
    } catch (err) {
      console.error(err.message);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  @action
  async addToDo() {
    const newItem = { id: this.todos.length + 1, descricao: this.currentValue };
    this.todos.push(newItem);

    try {
      this.loading = true;
      await ToDoListService.insert(newItem);
    } catch (err) {
      console.error(err.message);
    } finally {
      runInAction(() => {
        this.loading = false;
        this.currentValue = '';
      });
    }
  }

  @action
  async removeToDo(id) {
    this.todos = this.todos.filter((item) => item.id !== id);

    try {
      this.loading = true;
      await ToDoListService.remove(id);
    } catch (err) {
      console.error(err.message);
    } finally {
      runInAction(() => {
        this.loading = false;
        this.currentValue = '';
      });
    }
  }

  @action
  changeCurrentValue(newValue) {
    this.currentValue = newValue;
  }
}

export default new ToDoListApiStore();
