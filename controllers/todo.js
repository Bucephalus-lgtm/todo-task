
// *******************************************************************************************************************
/**
 * @author Bhargab Nath <bhargabnath691@gmail.com>
 * @date 15 March 2023
 */
// *******************************************************************************************************************
// Sample todos data
let todos = [
  { id: 1, text: "task 1", completed: false },
  { id: 2, text: "task 2", completed: true },
];

// Controller function to list all the todos
const listAllTodos = async (req, res) => {
  return res.status(200).json(todos);
};

// Controller function to fetch one todo by its id
const getTodoById = async (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === todoId);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  return res.status(200).json(todo);
};

// Controller function to update one todo by its id
const updateTodo = async (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const { text, completed } = req.body;

  todos[todoIndex] = {
    ...todos[todoIndex],
    text: text || todos[todoIndex].text,
    completed: completed || todos[todoIndex].completed,
  };

  return res.status(200).json(todos[todoIndex]);
};

// Controller function to delete one todo by its id
const deleteTodo = async (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(todoIndex, 1);

  return res.status(200).json({ message: "Todo deleted successfully" });
};

module.exports = { listAllTodos, getTodoById, updateTodo, deleteTodo };
