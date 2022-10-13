const connection = require('./connection')

function getFoods(db=connection) {
  return db('foods').select()
}

function search(name, db=connection){
  return db('foods')
  .select()
  .where('name',name)
}

module.exports = {
  getFoods,
  search
}
