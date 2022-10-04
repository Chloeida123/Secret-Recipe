const express = require('express')

const db = require('../db/foods')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const foods = await db.getFoods()
    res.json(foods)
  }
  catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router
