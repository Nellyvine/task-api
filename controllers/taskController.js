const Task = require("../models/taskModel");

// MySQL stores true/false as 1/0. Convert to real booleans for JSON.
const formatTask = (row) => ({
    id: row.id,
    title: row.title,
    is_completed: Boolean(row.is_completed)
});

const taskController = {
    getAllTasks: (req, res) => {
        Task.getAllTasks((error, results) => {
            if (error) return res.status(500).json({ error: "Database error" });
            res.status(200).json({ tasks: results.map(formatTask) });
        });
    },

    getTaskById: (req, res) => {
        Task.getTaskById(req.params.id, (error, results) => {
            if (error) return res.status(500).json({ error: "Database error" });
            if (results.length === 0) {
                return res.status(404).json({ error: "There is no task at that id" });
            }
            res.status(200).json(formatTask(results[0]));
        });
    },

    createTask: (req, res) => {
        const title = req.body.title;
        if (!title) return res.status(400).json({ error: "Title is required" });

        Task.createTask(title, (error, result) => {
            if (error) return res.status(500).json({ error: "Database error" });
            res.status(201).json({ id: result.insertId });
        });
    },

    // Fetches the current task first, so a request can update
    // just the title, just is_completed, or both together.
    updateTask: (req, res) => {
        const id = req.params.id;

        Task.getTaskById(id, (error, results) => {
            if (error) return res.status(500).json({ error: "Database error" });
            if (results.length === 0) {
                return res.status(404).json({ error: "There is no task at that id" });
            }

            const current = results[0];
            const title = req.body.title !== undefined ? req.body.title : current.title;
            const isCompleted = req.body.is_completed !== undefined
                ? (req.body.is_completed ? 1 : 0)
                : current.is_completed;

            Task.updateTask(id, title, isCompleted, (error) => {
                if (error) return res.status(500).json({ error: "Database error" });
                res.status(204).send();
            });
        });
    },

    // Assignment spec: always 204, even if the task doesn't exist.
    deleteTask: (req, res) => {
        Task.deleteTask(req.params.id, (error) => {
            if (error) return res.status(500).json({ error: "Database error" });
            res.status(204).send();
        });
    }
};

module.exports = taskController;