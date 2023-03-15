
// *******************************************************************************************************************
/**
 * @author Bhargab Nath <bhargabnath691@gmail.com>
 * @date 15 March 2023
 */
// *******************************************************************************************************************

const express = require("express");
const router = express.Router();

const TodoController = require("../controllers/todo");
const { verifyToken } = require("../middlewares/auth");

// Endpoint to fetch todos
router.get("/todos", verifyToken, TodoController.listAllTodos);

// Endpoint to fetch a todo by id
router.get("/todos/:id", verifyToken, TodoController.getTodoById);

// Endpoint to update a todo by id
router.put("/todos/:id", verifyToken, TodoController.updateTodo);

// Endpoint to delete a todo by id
router.delete("/todos/:id", verifyToken, TodoController.deleteTodo);

module.exports = router;
