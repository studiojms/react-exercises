import axios from 'axios';

class ToDoListService {
  baseUrl = 'http://localhost:8080/items';

  list() {
    return axios.get(this.baseUrl);
  }

  insert(data) {
    return axios.post(this.baseUrl, data);
  }

  remove(id) {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}

export default new ToDoListService();
