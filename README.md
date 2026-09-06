# Task API

A simple REST API for managing tasks (a to-do list backend), built with Node.js, Express, and MySQL.

## Features

- Create, read, update, and delete tasks
- Each task has a title and a completion status
- JSON request and response bodies
- MVC-style structure (routes → controllers → models → database)

## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – web framework for building the API
- **MySQL** (via XAMPP) – database for persistent storage
- **mysql2** – Node.js driver for connecting to MySQL

## Project Structure
task-api/
├── controllers/ # Handles requests and responses
│ └── taskController.js
├── models/ # Talks to the database (SQL queries)
│ └── taskModel.js
├── routes/ # Defines API endpoints
│ └── taskRoutes.js
├── db/
│ ├── db.js # Database connection
│ └── schema.sql # SQL script to create the database + table
├── app.js # App entry point
├── package.json
└── .gitignore 

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) installed
- [XAMPP](https://www.apachefriends.org) (or any MySQL server) installed and running

### Setup

1. Clone the repo:
git clone https://github.com/Nellyvine/task-api.git
cd task-api

2. Install dependencies:
   npm install
3. Start MySQL (e.g. via the XAMPP Control Panel).
4. Create the database and table by running `db/schema.sql` in phpMyAdmin (or any MySQL client):
   CREATE DATABASE IF NOT EXISTS todoapi;
USE todoapi;
-- then run the rest of db/schema.sql
5. Start the server:
   node app.js
6. The API will be running at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint         | Description                          |
|--------|------------------|---------------------------------------|
| POST   | `/v1/tasks`      | Create a new task                     |
| GET    | `/v1/tasks`      | List all tasks                        |
| GET    | `/v1/tasks/:id`  | Get a single task by ID               |
| PUT    | `/v1/tasks/:id`  | Update a task's title/completion      |
| DELETE | `/v1/tasks/:id`  | Delete a task                         |

### Example: Create a task
**Request**
POST /v1/tasks
Content-Type: application/json

{ "title": "Buy chocolate" }
**Response** — `201 Created`
```json
{ "id": 1 }
```

### Example: Task not found

**Response** — `404 Not Found`
```json
{ "error": "There is no task at that id" }
```

## Testing

All endpoints were manually tested using [Postman](https://www.postman.com/), including success cases and error cases (e.g. requesting a task ID that doesn't exist).

## Author

Tako Nellyvine


