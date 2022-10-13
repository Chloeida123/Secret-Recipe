import { ADD_FOOD, DELETE_FOOD, SEARCH_FOOD, SET_FOODS } from '../actions/foods'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_FOODS:
      return payload
    case SEARCH_FOOD:
      return payload
    case ADD_FOOD:
      return [...state, payload]
    case DELETE_FOOD:
      return state.filter((food) => food.id !== payload)
    default:
      return state
  }
}

export default reducer
