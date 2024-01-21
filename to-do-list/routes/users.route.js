const express = require('express');
const { getAllUsers, createUsers, updateUser, deleteUser, getUserById } = require('../controllers/users.controller');
const router = express.Router()

router.get("/", getAllUsers)
router.post("/", createUsers)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUserById)

module.exports = router