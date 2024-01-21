const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require("./routes/users.route")
const workspaceRoute = require("./routes/workspace.route")
const listRoute = require("./routes/list.route")
const cardRoute = require("./routes/card.route")


const multer = require('multer');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/users", usersRouter)
app.use("/workspace", workspaceRoute)
app.use("/list", listRoute)
app.use("/card", cardRoute)





app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.use((req, res, next) => {
    res.status(404).json({ message: "route not found" });
})

app.use((err, res, next) => {
    res.status(500).json({ message: "error 500 server error" });
})

module.exports = app;