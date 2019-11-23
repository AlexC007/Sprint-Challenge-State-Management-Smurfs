import React from 'react';
import smurfPerson from './smurfPerson';
import { connect } from 'react-redux'

const SmurfList = (props) =>  {
  return (
    <div>
      {props.smurf.map(smurf => <smurfPerson smurf={smurf}/>)}
      {console.log('Props', props)}
    </div>
  )
}
export default SmurfList