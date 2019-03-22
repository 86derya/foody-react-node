const express = require("express");
const mainRoute = require("./controllers/main/main");
const { login, logout, signUp, getUserByToken } = require("./controllers/auth");
const verifyToken = require("./modules/verifyToken");

const {
  createMenuItem,
  getMenuItems,
  getMenuItemById,
  createComment
} = require("./controllers/menuItems");

const {
  createUser,
  getUserById,
  updateUser,
  getUsers
} = require("./controllers/users/");
const {
  createProduct,
  updateProduct,
  getProducts,
  getProductById
} = require("./controllers/products/");
const { createIngredient } = require("./controllers/ingredients/");

const { createOrder, getOrderById } = require("./controllers/orders");
const { getComments } = require("./controllers/comments");
const { getAllCategories } = require("./controllers/categories");

const apiRoutes = express.Router();

apiRoutes

  .post("/auth/login", login)
  .post("/auth/register", signUp)
  // .use(verifyToken)
  .post("/menu", createMenuItem)
  .get("/menu", getMenuItems)
  .get("/menu/:id", getMenuItemById)
  // .put("/menu/:id/comments", createComment)
  .post("/auth/current", getUserByToken)
  .get("/auth/logout", logout)
  .get("/", mainRoute)
  .get("/users", getUsers)
  .get("/users/:id", getUserById)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  .post("/products", createProduct)
  .get("/products", getProducts)
  .put("/products/:id", updateProduct)
  .get("/products/:id", getProductById)
  .post("/orders", createOrder)
  .get("/orders/:id", getOrderById)
  .post("/ingredients", createIngredient)

  // .post("/comments", createComment)
  .get("/comments", getComments)
  .get("/categories", getAllCategories);

module.exports = apiRoutes;
