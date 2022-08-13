const express = require("express");
const app = express();
var moment = require("moment-timezone");
var morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (req, resp) => {
  resp.json(persons);
});

app.get("/api/persons", (req, resp) => {
  resp.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.statusMessage = "Note not Found!";
    response.status(404).end();
  }
});

app.get("/info", (req, resp) => {
  resp.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${moment().tz("GMT").format("ddd MMM HH:mm:ss GGGG z ZZ")}</p>`
  );

  resp.json(persons);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.find((person) => person.id === id);

  response.status(204).end();
});

const generateId = () => {
  const newId = Math.floor(Math.random() * (987654 - 987 + 1) + 987);
  return newId;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "Content missing",
    });
  }
  const personFind = persons.find((person) => person.name === body.name);
  if (!!personFind) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);

  response.json(person);
  console.log(JSON.stringify(body));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
