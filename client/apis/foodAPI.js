import request from 'superagent'

const rootUrl = '/api/v1/foods'

export async function getFoods() {
  try{
  const res = await request
  .get(rootUrl)
  return res.body
  }
  catch (err) {
    console.error(err.message)
  }
}
