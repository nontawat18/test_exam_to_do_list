const users = require("../models/users.model")
const { v4: uuidv4 } = require("uuid")


const getAllUsers = (req, res) => {
    res.status(200).json({ users })
}

const createUsers = (req, res) => {
    const newUser = {
        id: uuidv4(),
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        dateUpdated: formatDate(new Date())
    }
    users.push(newUser)
    res.status(201).json({ users })
}

const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, surname, email } = req.body
    users.filter((user) => user.id == id).map((selecteduser) => {
        selecteduser.name = name;
        selecteduser.surname = surname;
        selecteduser.email = email;
    })
    res.status(200).json(users)
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    users.forEach(result => {
        if (result.id != id) {
            res.status(200).json(result)
            console.log(result);

        }
    })
}


const getUserById = (req, res) => {
    const id = req.params.id;
    users.forEach(result => {
        if (result.id == id) {
            res.status(200).json(result)
            console.log(result);

        }
    })
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

module.exports = { getAllUsers, createUsers, updateUser, deleteUser, getUserById }