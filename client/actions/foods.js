import { getFoods } from '../apis/foodAPI'

export const SET_FOODS = 'SET_FOODS'

export function setFoods(foods) {
  return {
    type: SET_FOODS,
    payload: foods,
  }
}

//THUNK

export function fetchFoods() {
  return (dispatch) => {
    return getFoods().then((foods) => {
      dispatch(setFoods(foods))
    })
  }
}
