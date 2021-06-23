const db = require("./connection");
const { Product, Category } = require("../models");

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

  await User.create({
    firstName: "Test",
    lastName: "User",
    email: "testuser@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[3]._id, products[6]._id],
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
