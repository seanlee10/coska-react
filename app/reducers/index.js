import Constants from '../Constants'

const reducers = function(state = {heroes:[]}, action) {
  switch(action.type) {
    case Constants.ACTION.GET_HEROS_SUCCESS:
      return Object.assign({}, state, {
        heroes: action.response.data
      })
    default:
      return state
  }
}

export default reducers
