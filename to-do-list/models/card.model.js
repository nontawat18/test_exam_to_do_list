const { v4: uuidv4 } = require("uuid")
let card = [{
        id: uuidv4(),
        name: "Create login page",
        list_id: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",
        dateUpdated: "20/01/2024",
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
        }],
        warn: true,
        date_start: "20/01/2024",
        date_end: "27/01/2024",
        checklist: [{
                id: uuidv4(),
                name: "frontend",
                status: true,


            },
            {
                id: uuidv4(),
                name: "API",
                status: true,

            },
        ],
        comment: [{
                id: uuidv4(),
                message: "frontend",
                comment_by: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",

            },
            {
                id: uuidv4(),
                message: "frontend 2",
                comment_by: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",

            },
        ],
        file_upload: null,


    },


]
module.exports = card