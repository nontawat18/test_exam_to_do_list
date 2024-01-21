const express = require('express');
const router = express.Router()
const multer = require('multer');
const path = require('path');
const card = require("../models/card.model")
const { v4: uuidv4 } = require("uuid")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

router.get('/', (req, res, next) => {
    res.status(200).json({ card })

})

const upload = multer({ storage });
router.post('/', upload.single('file_upload'), async(req, res) => {
    try {
        const file_upload = req.file ? req.file.filename : null;

        const newCard = {
            id: uuidv4(),
            name: req.body.name,
            file_upload: file_upload,
            list_id: req.body.list_id,
            dateUpdated: formatDate(new Date()),
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
            date_start: formatDate(new Date()),
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
                    message: "frontend 1",
                    comment_by: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",

                },
                {
                    id: uuidv4(),
                    message: "frontend 2",
                    comment_by: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",

                },
            ],
        }


        card.push(newCard)
        res.status(201).json({ card })

    } catch (error) {
        console.error(error.message);

        res.status(500).json({ error: error.message });
    }
});


router.get('/uploads/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);

    res.sendFile(filePath);
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const { name, list_id, warn, date_start, date_end } = req.body
    const file_upload = req.file ? req.file.filename : null;
    const member = [{
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
    const checklist = [{
            id: uuidv4(),
            name: "frontend",
            status: true,


        },
        {
            id: uuidv4(),
            name: "API",
            status: true,

        },
    ]
    const comment = [{
            id: uuidv4(),
            message: "frontend 1",
            comment_by: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",

        },
        {
            id: uuidv4(),
            message: "frontend 2",
            comment_by: "6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4",

        },
    ]
    card.filter((Card) => Card.id == id).map((selectedCard) => {
        selectedCard.name = name;
        selectedCard.list_id = list_id;
        selectedCard.warn = warn;
        selectedCard.date_start = date_start;
        selectedCard.date_end = date_end;

        selectedCard.member = member;
        selectedCard.checklist = checklist;
        selectedCard.comment = comment;

        selectedCard.file_upload = file_upload;
    })
    res.status(200).json(card)
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    card.filter(result => {
        let message = ""
        if (result.id == id) {
            message = "Delete success!"
            res.status(200).send(message)

        }
    })

})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    card.forEach(result => {
        if (result.id == id) {
            res.status(200).json(result)
            console.log(result);

        }
    })

})




function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}


module.exports = router