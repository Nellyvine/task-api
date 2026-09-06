const db = require("../db/db");

const Task = {
    getAllTasks: (callback) => {
        db.query("SELECT * FROM tasks", callback);
    },

    getTaskById: (id, callback) => {
        db.query("SELECT * FROM tasks WHERE id = ?", [id], callback);
    },

    createTask: (title, callback) => {
        db.query("INSERT INTO tasks (title) VALUES (?)", [title], callback);
    },

    updateTask: (id, title, isCompleted, callback) => {
        db.query(
            "UPDATE tasks SET title = ?, is_completed = ? WHERE id = ?",
            [title, isCompleted, id],
            callback
        );
    },

    deleteTask: (id, callback) => {
        db.query("DELETE FROM tasks WHERE id = ?", [id], callback);
    }
};

module.exports = Task;