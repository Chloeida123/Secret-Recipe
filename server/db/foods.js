const connection = require('./connection')

function getFoods(db = connection) {
  return db('foods').select()
}

module.exports = {
  getFoods,
}
