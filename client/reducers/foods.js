import { SET_FOODS } from '../actions/foods'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_FOODS:
      return payload
    default:
      return state
  }
}

export default reducer
