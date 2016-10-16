module.exports = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_GENERAL_TEMPERATURE_DATA_FULFILLED':
      return Object.assign({}, state, { temperature: action.payload });
    case 'FETCH_GENERAL_POWER_DATA_FULFILLED':
      return Object.assign({}, state, { power: action.payload });
    case 'FETCH_GENERAL_LOW_POWER_DATA_FULFILLED':
    return Object.assign({}, state, { lowPower: action.payload });
    default:
      return state;
  }
}
