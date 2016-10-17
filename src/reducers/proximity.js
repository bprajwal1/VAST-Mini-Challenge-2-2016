module.exports = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_PROXIMITY_STATIC_DATA_FULFILLED':
      return Object.assign({}, state, { static: action.payload });
    default:
      return state;
  }
}
