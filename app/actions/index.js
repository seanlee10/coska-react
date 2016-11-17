import axios from 'axios';
import Constants from '../Constants'

export const getHeroes = () => {
  return dispatch => {
    return axios.get('/api/v0/heroes')
      .then(function (response) {
        dispatch({type:Constants.ACTION.GET_HEROS_SUCCESS, response: response});
      })
      .catch(function (error) {
        dispatch({type:Constants.ACTION.GET_HEROS_FAIL, response: error});
        return error;
      });
  }
}
