import { addOneFood, getFoods, searchFoods } from '../apis/foodAPI'

export const SET_FOODS = 'SET_FOODS'
export const SEARCH_FOOD = 'SEARCH_FOOD'
export const ADD_FOOD = 'ADD_FOOD'

export function setFoods(foods) {
  return {
    type: SET_FOODS,
    payload: foods,
  }
}

export function addTheFood(food){
  return {
    type: ADD_FOOD,
    payload: food
  }
}

export function searchFood(foods) {
  return {
    type:SEARCH_FOOD,
    payload:foods
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

export function fetchAddedFood(data){
  return(dispatch) => {
    return addOneFood(data).then((res)=> dispatch (addTheFood(res)))
  }
}

export function fetchSearchFood(data){
  return(dispatch) => {
    return searchFoods(data).then((res)=> dispatch(searchFood(res)))
  }
}
