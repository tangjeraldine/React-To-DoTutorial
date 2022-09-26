const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");
const path = require("path");
const port = process.env.PORT ?? 3000;

app.use(express.static("./client/dist/"));

const todos = [1, 2, 3].map((x) => {
  return { title: faker.company.name() };
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});
// remember to have a naming convention that doesn't clash with your frontend react routes

//* This route captures any route that doesn't fall into any of the abovementioned routes, and captures it into the index.html in the dist folder
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
}); //! This portion is implicitly built into Vite

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
