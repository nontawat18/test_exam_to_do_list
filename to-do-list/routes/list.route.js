const express = require('express');
const router = express.Router()
const list = require("../models/list.model")
const { v4: uuidv4 } = require("uuid")


router.get('/', (req, res, next) => {
    res.status(200).json({ list })

})

router.post('/', async(req, res) => {
    try {

        const newList = {
            id: uuidv4(),
            name: req.body.name,
            workspace_id: req.body.workspace_id,
            dateUpdated: formatDate(new Date())
        }

        list.push(newList)
        res.status(201).json({ list })

    } catch (error) {
        console.error(error.message);

        res.status(500).json({ error: error.message });
    }
});



router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const { name, workspace_id } = req.body

    list.filter((List) => List.id == id).map((selectedList) => {
        selectedList.name = name;
        selectedList.workspace_id = workspace_id;
    })
    res.status(200).json(list)
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    list.filter(result => {
        let message = ""
        if (result.id == id) {
            message = "Delete success!"
            res.status(200).send(message)
                // res.status(200).json(result)

        }

    })

})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    list.forEach(result => {
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