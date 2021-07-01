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
      name: "abstract-1",
      description: "abstract abstract abstract abstract abstract",
      image: "blue-water.jpeg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "abstract-2",
      description: "abstract abstract abstract abstract abstract",
      image: "bridge.jpeg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "abstract-3",
      description: "abstract abstract abstract abstract abstract",
      image: "Corona.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "city-1",
      description: "city city city city city ",
      image: "city-night.jpg",
      category: categories[1]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "city-2",
      description: "city city city city city ",
      image: "paris.jpeg",
      category: categories[1]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "city-3",
      description: "city city city city city ",
      image: "vegas.jpeg",
      category: categories[1]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "landscape-1",
      description: "landscape landscape landscape landscape landscape ",
      image: "MountainRange.jpg",
      category: categories[2]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "landscape-2",
      description: "landscape landscape landscape landscape landscape ",
      image: "waterfall.jpeg",
      category: categories[2]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "landscape-3",
      description: "landscape landscape landscape landscape landscape ",
      image: "tropical.jpeg",
      category: categories[2]._id,
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
