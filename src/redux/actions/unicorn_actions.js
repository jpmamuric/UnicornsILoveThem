import * as types from './types';

export const userReady = () => ({ type: types.USER_READY, payload: true });

export const changeColor = (color, colorChosen) => ({ type: types.CHANGE_COLOR, payload: color, colorChosen });

export const addAccessories = accessoryName => dispatch => {
  dispatch({ type: types.ADD_ACCESSORIES, accessoryName, payload: true });
}

export const removeAccessories = accessoryName => dispatch => {
  dispatch({ type: types.REMOVE_ACCESSORIES, accessoryName, payload: false });
}
