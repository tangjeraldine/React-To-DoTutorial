const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");
const port = process.env.PORT ?? 3000;

app.use(express.static("./client/dist/"));

const todos = [1, 2, 3].map((x) => {
  return { title: faker.company.name() };
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});
// remember to have a naming convention that doesn't clash with your frontend react routes

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
