// *******************************************************************************************************************
/**
 * *The index.js file is the entry point file for our Node.js application.
 * *It is the main file that is executed when the application is started using the node command.
 *
 * @author Bhargab Nath <bhargabnath691@gmail.com>
 * @date 15 March 2023
 */
// *******************************************************************************************************************

const express = require("express");

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/todo", require("./routes/todo"));

const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
