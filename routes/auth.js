
// *******************************************************************************************************************
/**
 * @author Bhargab Nath <bhargabnath691@gmail.com>
 * @date 15 March 2023
 */
// *******************************************************************************************************************

const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");

// Endpoint to generate JWT token
router.post("/auth", AuthController.generateToken);

module.exports = router;
