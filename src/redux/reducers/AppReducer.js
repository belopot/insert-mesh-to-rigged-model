import { IS_ATTACH } from "../StoreConstants"

const initialState = {
  isAttach: false
}

const AppReducer = function (state = initialState, action) {
  switch (action.type) {
    case IS_ATTACH: {
      return {
        ...state,
        isAttach: action.data
      }
    }
    default: {
      return state
    }
  }
}

export default AppReducer
