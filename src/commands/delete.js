import { readData, writeData } from '../utils/fileHandler.js';
import chalk from 'chalk';

export default function deleteTask(id) {
  const tasks = readData();
  const index = tasks.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    console.log(chalk.red(`Task with ID ${id} not found.`));
    return;
  }

  const removed = tasks.splice(index, 1);
  writeData(tasks);

  console.log(chalk.green(`Task deleted: "${removed[0].description}"`));
}
