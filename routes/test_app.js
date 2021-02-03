const express = require('express')
const router = express.Router()

const test_demo = require('../utils/test_demo')

router.get('/', async function (req, res, next) {
    try {
        const result = test_demo.test_demo(5, 4)

        const response = { result }

        res.status(201).json(response)
    } catch (error) {
        res.status(500).json(error)
    }


})

module.exports = router;
