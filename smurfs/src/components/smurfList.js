import React from 'react';
import smurfPerson from './smurfPerson';
import { connect } from 'react-redux'
import {smurfData} from './actions/index'

const SmurfList = (props) =>  {
  return (
    <div>
      {props.smurf.map(smurf => <smurfPerson smurf={smurf}/>)}
     
    </div>
  )
}
const mapStateToProps =state =>{
    return{
        smurt: state.smurf
    }
}
export default connect(mapStateToProps, {smurfData}) (SmurfList);