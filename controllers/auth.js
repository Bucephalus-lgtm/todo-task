
// *******************************************************************************************************************
/**
 * @author Bhargab Nath <bhargabnath691@gmail.com>
 * @date 15 March 2023
 */
// *******************************************************************************************************************

const jwt = require("jsonwebtoken");

// Controller function to create a jwt token with the provided email and password
const generateToken = async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (email !== "doe.john@outlook.com" || password !== "test123") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = jwt.sign({ email }, "secret_key"); // secret_key should be ideally kept hidden like using DOTENV package

  return res.status(200).json({ token });
};

module.exports = { generateToken };
