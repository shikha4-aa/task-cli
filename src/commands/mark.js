import { readData, writeData } from '../utils/fileHandler.js';
import chalk from 'chalk';

export default function markTask(id, status) {
  const validStatuses = ['todo', 'in-progress', 'done'];
  const tasks = readData();
  const index = tasks.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    console.log(chalk.red(`Task with ID ${id} not found.`));
    return;
  }

  if (!validStatuses.includes(status)) {
    console.log(chalk.red(`Invalid status. Use one of: ${validStatuses.join(', ')}`));
    return;
  }

  tasks[index].status = status;
  tasks[index].updatedAt = new Date().toISOString();

  writeData(tasks);
  console.log(chalk.green(`Task ${id} marked as ${status}`));
}
