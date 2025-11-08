# Task Tracker CLI

> A lightweight, developer-friendly CLI to manage tasks from the terminal.  
> Built with Node.js, Commander, and JSON storage — easy to extend to a backend.

---

## Features
- Add, list, update, mark (todo | in-progress | done), and delete tasks
- Each task includes: `id`, `description`, `status`, `createdAt`, `updatedAt`
- Uses ISO timestamps for storage and shows human-friendly timestamps in the CLI
- Modular code structure suitable for extension into a REST API or DB-backed app

---

## Tech Stack

- **Language:** JavaScript (Node.js)  
- **File System:** JSON file for persistent storage  
- **Libraries:**  
  - `fs` — to handle read/write  
  - `path` — to manage file paths  
  - `process` — to handle CLI commands 

---

## Project Structure

task-cli/
│
├── data.json       # Stores all the tasks
├── index.js         # Main CLI file
├── package.json     # Project metadata
└── README.md        # Documentation


---

# Add a new task
task add "Buy groceries"

# Update a task description
task update 1 "Buy groceries and cook dinner"

# Mark a task as done
task mark-done 1

# Delete a task
task delete 1

# List all tasks
task list

# Filter tasks by status
task list todo
task list in-progress
task list done



##  Quick Install (local dev)
```bash
# clone
git clone https://github.com/<shikha4-aa>/<task-cli>.git
cd <task-cli>

# install dependencies
npm install

# make the CLI executable locally (dev)
npm link
