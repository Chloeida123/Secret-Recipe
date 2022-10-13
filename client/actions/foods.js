import { addOneFood, deleteFoodData, getFoods, searchFoods } from '../apis/foodAPI'

export const SET_FOODS = 'SET_FOODS'
export const SEARCH_FOOD = 'SEARCH_FOOD'
export const ADD_FOOD = 'ADD_FOOD'
export const DELETE_FOOD = 'DELETE_FOOD'

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

export function deleteFood(id){
  return {
    type: DELETE_FOOD,
    payload: id
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

export function fetchDeleteFood(id){
  return(dispatch) => {
    return deleteFoodData(id).then(() => dispatch(deleteFood(id)))
  }
}
