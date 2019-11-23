import {GET_SMURF,GET_COMPLETE, GET_ERROR, ADD_SMURF , ADD_SMURF_COMPLETE, ADD_SMURF_ERROR} from '../actions/index';

const initialState= {
    getSmurf: false,
    addSmurf: false,
    smurf:[],
    error: "",

}

export const reducer = (state= initialState,action) => {
    switch(action.type){
  
      case GET_SMURF:
        return {
          ...state,
          getSmurf: true
        }
      case GET_COMPLETE:
        return {
          ...state,
          getSmurf: false,
          smurf: action.payload
        }
      case GET_ERROR:
        return {
          ...state,
          getSmurf: false,
          error: action.payload
        }
      case ADD_SMURF:
        return {
          ...state,
          addSmurf: true,
        }
      case ADD_SMURF_COMPLETE:
        return {
          ...state,
          addSmurf: false,
          smurf: action.payload
        }
      case ADD_SMURF_ERROR:
        return {
          ...state,
          addSmurf: false,
          error: action.payload
        }
      default: 
        return state
    }
}