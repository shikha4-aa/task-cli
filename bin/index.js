#!/usr/bin/env node
import { program } from 'commander';
import addTask from '../src/commands/add.js';
import listTasks from '../src/commands/list.js';
import updateTask from '../src/commands/update.js';
import markTask from '../src/commands/mark.js';
import deleteTask from '../src/commands/delete.js';

program
  .command('add <task>')
  .description('Add a new task')
  .action(addTask);

program
  .command('list')
  .description('List all tasks')
  .action(listTasks);

program
  .command('update <id> <newTask>')
  .description('Update an existing task')
  .action(updateTask);

program
  .command('mark <id> <status>')
  .description('Mark task as in-progress or done')
  .action(markTask);

program
  .command('delete <id>')
  .description('Delete a task')
  .action(deleteTask);

program.parse(process.argv);
