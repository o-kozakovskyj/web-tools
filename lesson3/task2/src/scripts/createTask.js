import { renderTasks } from './render/renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };
  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
const task1 = {
text: 'task1',
done: false,
createDate: 23333333333,
id: '5',
}
console.log(createTask(task1));