import * as types from '../actions/types'

const initialState = {
  readyToBuild: false,
  color: 'white',
  colorChosen: false,
  accessories: {},
  parts: {},
  totalPrice: 0,
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case types.USER_READY:
      return { ...state, readyToBuild: action.payload || false };

    case types.CHANGE_COLOR:
      return { ...state, color: action.payload , colorChosen: action.colorChosen };

    case types.ADD_ACCESSORIES:
      return {
        ...state,
        accessories: {
          ...state.accessories,
          [action.accessoryName]: action.payload
        }
      };

    case types.REMOVE_ACCESSORIES:
      return {
        ...state,
        accessories: {
          ...state.accessories,
          [action.accessoryName]: action.payload
        }
      };
      
    default:
      return state;
  }
}
