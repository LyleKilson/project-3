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

  const products = await Product.insertMany([
    {
      name: "abstract-1",
      description: "abstract abstract abstract abstract abstract",
      image: "abstract-1.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "abstract-2",
      description: "abstract abstract abstract abstract abstract",
      image: "abstract-2.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "abstract-3",
      description: "abstract abstract abstract abstract abstract",
      image: "abstract-3.jpg",
      category: categories[0]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "city-1",
      description: "city city city city city ",
      image: "city-1.jpg",
      category: categories[1]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "city-2",
      description: "city city city city city ",
      image: "city-2.jpg",
      category: categories[1]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "city-3",
      description: "city city city city city ",
      image: "city-3.jpg",
      category: categories[1]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "landscape-1",
      description: "landscape landscape landscape landscape landscape ",
      image: "landscape-1.jpg",
      category: categories[2]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "landscape-2",
      description: "landscape landscape landscape landscape landscape ",
      image: "landscape-2.jpg",
      category: categories[2]._id,
      price: 0.99,
      quantity: 1,
    },
    {
      name: "landscape-3",
      description: "landscape landscape landscape landscape landscape ",
      image: "landscape-3.jpg",
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
    const firstName = faker.internet.firstName();
    const lastName = faker.internet.lastName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ firstName, lastName, email, password });
  }

  await User.collection.insertMany(userData);

  console.log("users seeded");

  console.log("seed finished, exiting");

  process.exit(0);
});
