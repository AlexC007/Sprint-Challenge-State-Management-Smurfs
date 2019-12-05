import axios from 'axios';
export const FETCH_SMURF_START =  'FETCH_SMURF_START'  ; 
export const FETCH_SMURF_COMPLETE= 'FETCH_SMURF_COMPLETE';
export const FETCH_SMURF_ERROR= 'FETCH_SMURF_ERROR';
export const ADD_SMURF = 'ADD_SMURF' ;
export const DELETE_SMURF = 'DELETE_SMURF' ;

export function FetchSmurf(){
  return dispatch =>{
    axios
    .get('http://localhost:3333/smurfs')
    .then(res=> {
      console.log(res)
      dispatch({ type: FETCH_SMURF_COMPLETE, payload: res.data })
    })
    .catch(error => {
      console.log(error)
      dispatch({ type:FETCH_SMURF_ERROR, payload: error })
    })
  }
}

  export function AddSmurf(name, age, height) {
    return dispatch => {
    axios
    .post('http://localhost:3333/smurfs',{
        name:name, age: age, height: height
    })
    .then(res => {
     
      dispatch({ type: ADD_SMURF, payload: res.data})
    })
    .catch(error => {
      
      throw error 
    })
  }
}
  export function DeleteSmurf(id){
      return dispatch => {
     axios
      .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res =>{
            dispatch({type:DELETE_SMURF, payload: res.data})
        })
        .catch(error => {
      
            throw error 
          })
  }
}