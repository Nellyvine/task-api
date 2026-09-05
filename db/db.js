// Import the mysql2 package.
// mysql2 allows Node.js to communicate with MySQL.
const mysql = require("mysql2");

// Create a connection to the MySQL database.
const connection = mysql.createConnection({
    // The database server.
    // localhost means MySQL is running on this computer.
    host: "localhost",

    // MySQL username.
    // XAMPP normally uses root.
    user: "root",

    // MySQL password.
    // XAMPP normally has no password by default.
    password: "",

    // The database that we want to use.
    database: "todo_api"
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
// This allows other files (models) to use it.
module.exports = connection;

   connection.query("SELECT 1 + 1 AS result", (error, results) => {
       console.log(results);
   });
   