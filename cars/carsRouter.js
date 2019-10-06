const express = require(express)
// const db = require(knex.config)

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            res.json({
                error: err,
                message: "could not get cars"
            })
        })

})