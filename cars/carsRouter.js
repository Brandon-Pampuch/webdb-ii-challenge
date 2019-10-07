const express = require('express')

const db = require('../data/dbConfig')
router = express.Router()

router = express.Router()

router.get('/', (req, res) => {
    db.select('*').from('cars')
        .then(accounts => {
            res.json(accounts)
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "can not find accounts"
            })
        })
})

module.exports = router