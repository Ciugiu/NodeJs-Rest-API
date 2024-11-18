import usersRouter from "./routes/users.js";
import express, { json } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

console.log("test");

// MIDDLEWARE
app.use(express.json());
// CORS
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, x-api-key"
	)
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	next()
})
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
