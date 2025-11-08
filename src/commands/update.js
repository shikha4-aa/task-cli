import { readData, writeData } from '../utils/fileHandler.js';
import chalk from 'chalk';

export default function updateTask(id, newDescription) {
  const tasks = readData();
  const index = tasks.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    console.log(chalk.red(`Task with ID ${id} not found.`));
    return;
  }

  tasks[index].description = newDescription;
  tasks[index].updatedAt = new Date().toISOString();

  writeData(tasks);
  console.log(chalk.green(`Task ${id} updated: "${newDescription}"`));
}
