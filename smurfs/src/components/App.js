import React, { useEffect } from "react";
import SmurfForm from './SmurfForm';
import SmurfList from './Smurflist';
import {connect} from 'react-redux';
import {FetchSmurf, DeleteSmurf, AddSmurf} from "../actions/index";
import "./App.css";
const App =(props)=>{

  useEffect(()=>{
      props.FetchSmurf()
    },[])


  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm/>
        {props.smurfs.map(item =>(
          <SmurfList item= {item} key= {item.id} DeleteSmurf={props.DeleteSmurf}/>
        ))}
        
      </div>
    );
  }


const mapStateToProps = (state) =>{
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}
export default connect(mapStateToProps,{FetchSmurf, DeleteSmurf, AddSmurf} ) (App);
