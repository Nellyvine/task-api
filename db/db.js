const mysql = require("mysql2");

// Create a connection to the MySQL database.
const connection = mysql.createConnection({
    // The database server.
    host: "localhost",
    // MySQL username.
    user: "root",
    // MySQL password.
    password: "",
    // The database that we want to use.
    database: "todoapi"
});

// Connect to the MySQL database.
connection.connect((error) => {
    // Check if an error happened.
    if (error) {
        // Display the database error.
        console.log("Database connection failed:", error);

        // Stop executing this function.
        return;
    }

    // Display a success message.
    console.log("Connected to MySQL database.");
});

// Export the connection.
module.exports = connection;
