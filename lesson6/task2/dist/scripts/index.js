import { initTodoListHandlers } from './todoList.js';
import { createListItem, renderTasks } from './render/renderer.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });

  initTodoListHandlers();
});
const onStorageChange = (event) => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};
console.log(createListItem('task1'));
window.addEventListener('storage', onStorageChange);
