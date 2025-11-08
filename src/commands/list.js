import { readData } from '../utils/fileHandler.js';
import chalk from 'chalk';

export default function listTasks() {
  const tasks = readData();

  if (tasks.length === 0) {
    console.log(chalk.yellow('No tasks found.'));
    return;
  }

  console.log(chalk.cyan('\nYour Tasks:'));
  tasks.forEach(t => {
    const createdAt = new Date(t.createdAt).toLocaleString();
    const updatedAt = new Date(t.updatedAt).toLocaleString();

    console.log(
      `${t.id}. ${t.description} - [${t.status}] (Created: ${createdAt}, Updated: ${updatedAt})`
    );
  });
  console.log();
}
