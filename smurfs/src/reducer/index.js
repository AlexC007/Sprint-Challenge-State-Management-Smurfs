import{FETCH_SMURF_START, 
FETCH_SMURF_COMPLETE,
FETCH_SMURF_ERROR,
ADD_SMURF, 
DELETE_SMURF} 
from '../actions/index'

export const initialState = {
    smurfs: [
        {
            name: '',
            age: '',
            height:'',
            id: '',
        }
    ],
    isLoading: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
        switch(action.type){
      
          case FETCH_SMURF_START:
            return {
              ...state,
              isLoading: true
            }
          case FETCH_SMURF_COMPLETE:
            return {
              ...state,
              isLoading: false,
              smurf: action.payload
            }
          case FETCH_SMURF_ERROR:
            return {
              ...state,
             isLoading: false,
              error: action.payload
            }
          case ADD_SMURF:
            return {
              ...state,
                smurfs: action.payload,
                error: ""
            }
          case DELETE_SMURF:
            return {
              ...state,
              smurfs: action.payload,
              isLoading: false,
              error: "",
            }
          default: 
            return state
        }
    }
