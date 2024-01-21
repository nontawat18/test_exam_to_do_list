const { v4: uuidv4 } = require("uuid")
let workspace = [{
        id: uuidv4(),
        name: "To do list project",
        background_img: "",
        background_color: "#000000",
        dateUpdated: "20/01/2024",
        vision: "admin",
        create_by: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",
        member: [{
            id: uuidv4(),
            name: "Nontawat",
            surname: "Wichapha",
            email: "nontawatwichapha1998@gmail.com",
            dateUpdated: "20/01/2024"

        }, {
            id: uuidv4(),
            name: "Yupawadee",
            surname: "Buakeaw",
            email: "yupawadee1998@gmail.com",
            dateUpdated: "20/01/2024"
        }]


    },
    {
        id: uuidv4(),
        name: "To do list project 2",
        background_img: "",
        background_color: "#000000",
        dateUpdated: "20/01/2024",
        vision: "admin",
        create_by: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",
        member: [{
            id: uuidv4(),
            name: "Nontawat",
            surname: "Wichapha",
            email: "nontawatwichapha1998@gmail.com",
            dateUpdated: "20/01/2024"

        }, {
            id: uuidv4(),
            name: "Yupawadee",
            surname: "Buakeaw",
            email: "yupawadee1998@gmail.com",
            dateUpdated: "20/01/2024"
        }]


    },

]
module.exports = workspace