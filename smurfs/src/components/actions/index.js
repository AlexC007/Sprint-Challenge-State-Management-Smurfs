import axios from 'axios';
export const GET_SMURF = 'GET_SMURF';
export const GET_COMPLETE = 'GET_COMPLETE';
export const GET_ERROR= "GET_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_COMPLETE ="ADD_SMURF_COMPLETE";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";


export const smurfData = () => dispatch => {
  dispatch({ type: GET_SMURF })
  axios
  .get('http://localhost:3333/smurfs')
  .then(data => {
    console.log(data)
    dispatch({ type: GET_COMPLETE, payload: data.data })
  })
  .catch(error => {
    console.log(error)
    dispatch({ type:GET_ERROR, payload: error })
  })
}
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF })
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(data => {
    console.log(data)
    dispatch({ type: ADD_SMURF_COMPLETE, payload: smurf.data})
  })
  .catch(error => {
    console.log(error)
    dispatch({ type: ADD_SMURF_ERROR, payload: error})
  })
}