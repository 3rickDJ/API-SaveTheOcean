const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors= require("cors");

const corsOptions={
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// get all especies
app.get('/especies', async (req, res) => {
  const allAnimals =  await prisma.animal.findMany({});
  res.json(allAnimals);
});

// get animal by id
app.get('/especies/:id', async (req, res) => {
  const id = req.params.id;
  const animal = await prisma.animal.findUnique({where: {id: parseInt(id)}});
  res.json(animal);
});

// get animal by name
app.get('/especies/name/:name', async (req, res) => {
    const nameAnimal = req.params.name;
    const animal = await prisma.animal.findUnique({where: {name: nameAnimal}});
    res.json(animal);
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
