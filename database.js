import sqlite3 from "sqlite3";

// Open the database connection
const db = new sqlite3.Database("./users.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to the SQLite database.");

        // Create the items table if it doesn't exist
        db.run(
            `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL
      )`,
            (err) => {
                if (err) {
                    console.error("Error creating table:", err.message);
                }
            }
        );
    }
});

export default db;