const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());
app.use("/v1", taskRoutes); // all task routes now start with /v1

app.get("/", (req, res) => {
    res.send("Task API is running");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});