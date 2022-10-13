const connection = require('./connection')

function getFoods(db=connection) {
  return db('foods').select()
}

function addFood(data, db=connection) {
  return db('foods'). insert(data)
}

function getOneFood(id,db=connection){
  return db('foods')
  .select()
  .where('id',id)
  .first()
}

function search(name, db=connection){
  return db('foods')
  .where('name','like',`%${name}%`)
}

module.exports = {
  getFoods,
  search,
  addFood,
  getOneFood
}
