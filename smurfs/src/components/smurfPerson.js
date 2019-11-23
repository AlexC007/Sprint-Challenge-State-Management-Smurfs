import React from 'react'
import {smurfData} from './actions/index';
import {connect} from 'react-redux';
const smurfPerson = (props) => {
  return (
    <div>
      <h1>{props.smurf.name}</h1>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  )
}

const mapStateToProps= state=>{
    return{
        smurf: state.smurf
    }
}
export default connect(mapStateToProps, {smurfData}) (smurfPerson);