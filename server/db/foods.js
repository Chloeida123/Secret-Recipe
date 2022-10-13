const connection = require('./connection')

function getFoods(db=connection) {
  return db('foods').select()
}

function search(name, db=connection){
  return db('foods')
  .where('name','like',`%${name}%`)
}

module.exports = {
  getFoods,
  search
}
