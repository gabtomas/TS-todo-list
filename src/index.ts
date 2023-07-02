/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { v4 as uuidV4 } from 'uuid';

const id = uuidV4();
console.log(`Hello, ${id}!`);

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector('new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

form?.addEventListener('submit', (event) => {
  // prevent the default behavior of the form submit event
  event.preventDefault();

  //if input exists give me the value, if not return undefined
  if (input?.value == '' || input?.value == null) {
    return;
  }

  const task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  addListItem(task);
});

function addListItem(task: Task) {
  const listItem = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.append(checkbox, task.title);
  listItem.append(label);
  list?.append(listItem);
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}
