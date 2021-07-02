const faker = require("faker");

const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Abstract" },
    { name: "City" },
    { name: "Landscape" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "Corona",
      description: "abstract abstract abstract abstract abstract",
      image: "Corona.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "Jungle Gym",
      description: "abstract abstract abstract abstract abstract",
      image: "jungleGym.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "Pina",
      description: "abstract abstract abstract abstract abstract",
      image: "pina.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "Triangles",
      description: "abstract abstract abstract abstract abstract",
      image: "triangles.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "Tron",
      description: "abstract abstract abstract abstract abstract",
      image: "tron.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "Mountain Range",
      description: "landscape landscape landscape landscape landscape ",
      image: "MountainRange.jpg",
      category: categories[2]._id,
      price: 0.99,
      quantity: 1,
    },
  
    {
      name: "Shapes",
      description: "abstract abstract abstract abstract abstract",
      image: "shapes.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "DNA",
      description: "abstract abstract abstract abstract abstract ",
      image: "DNA.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  // create many fake users
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    userData.push({ firstName, lastName, email, password });
  }

  await User.collection.insertMany(userData);

  console.log("users seeded");

  console.log("seed finished, exiting");

  process.exit(0);
});
