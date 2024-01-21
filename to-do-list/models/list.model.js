const { v4: uuidv4 } = require("uuid")
let list = [{
        id: uuidv4(),
        name: "To do",
        workspace_id: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",
        dateUpdated: "20/01/2024"
    },
    {
        id: uuidv4(),
        name: "Doing",
        workspace_id: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",
        dateUpdated: "20/01/2024"
    },
    {
        id: uuidv4(),
        name: "Done",
        workspace_id: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",
        dateUpdated: "20/01/2024"
    },

]
module.exports = list