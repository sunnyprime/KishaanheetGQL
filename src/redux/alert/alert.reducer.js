import AlertActionTypes from './alert.type';

const initialState = [

];

// eslint-disable-next-line require-jsdoc
export default function(state= initialState, action) {
  // console.log(state);
  // console.log(action);
  const {type, payload} = action;
  switch (type) {
    case AlertActionTypes.SET_ALERT:
      return [...state, payload];
    case AlertActionTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
