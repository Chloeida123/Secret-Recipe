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

router.get('/:id', async (req,res)=> {
  try {
    const oneFood = await db.getOneFood()
    res.json(oneFood)
  }
  catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/query/:name', async ( req,res)=> {
  try{
    const name = req.params.name
    const searchFood = await db.search(name)
    res.json(searchFood)}
  catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
    }
  })

module.exports = router
