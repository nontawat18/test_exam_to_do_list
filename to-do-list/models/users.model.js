const { v4: uuidv4 } = require("uuid")
let users = [{
        id: uuidv4(),
        name: "Nontawat",
        surname: "Wichapha",
        email: "nontawatwichapha1998@gmail.com",
        dateUpdated: "20/01/2024"

    },
    {
        id: uuidv4(),
        name: "Yupawadee",
        surname: "Buakeaw",
        email: "yupawadee1998@gmail.com",
        dateUpdated: "20/01/2024"

    },
]
module.exports = users