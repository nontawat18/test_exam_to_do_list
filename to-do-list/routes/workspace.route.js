const express = require('express');
const router = express.Router()
const multer = require('multer');
const path = require('path');
const workspace = require("../models/workspace.model")
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
    res.status(200).json({ workspace })

})

const upload = multer({ storage });
router.post('/', upload.single('background_img'), async(req, res) => {
    try {
        const background_img = req.file ? req.file.filename : null;

        const newWorkspace = {
            id: uuidv4(),
            name: req.body.name,
            background_img: background_img,
            background_color: req.body.background_color,
            vision: req.body.vision,
            create_by: req.body.create_by,
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
            dateUpdated: formatDate(new Date())
        }


        workspace.push(newWorkspace)
        res.status(201).json({ workspace })

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
    const { name, background_color, vision, create_by } = req.body
    const background_img = req.file ? req.file.filename : null;
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
    workspace.filter((Workspace) => Workspace.id == id).map((selectedWorkspace) => {
        selectedWorkspace.name = name;
        selectedWorkspace.background_color = background_color;
        selectedWorkspace.vision = vision;
        selectedWorkspace.create_by = create_by;
        selectedWorkspace.member = member;
        selectedWorkspace.background_img = background_img;
    })
    res.status(200).json(workspace)
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    workspace.forEach(result => {
        if (result.id != id) {
            res.status(200).json(result)
            console.log(result);

        }
    })

})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    workspace.forEach(result => {
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