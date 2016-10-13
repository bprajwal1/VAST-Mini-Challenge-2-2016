module.exports = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_HAZIUM_DATA_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}
