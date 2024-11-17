import usersRouter from "./routes/users.js";
import express, { json } from "express";
import db from "./database.js";

const app = express();
const port = 3000;

console.log("test");



// MIDDLEWARE
app.use(express.json());
// users endpoint
app.use("/api/", usersRouter);

// HOME GET METHOD
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my users API ! 🎉" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//Open your browser and go to http://localhost:3000.
// You should see the message "Welcome to our simple REST API!"
