import { readData, writeData } from '../utils/fileHandler.js';
import chalk from 'chalk';

export default function addTask(description) {
  const tasks = readData();
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(newTask);
  writeData(tasks);

  console.log(chalk.green(`✅ Task added: "${description}"`));
}
