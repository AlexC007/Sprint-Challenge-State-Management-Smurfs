import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurfList';
import Form from './Form';
import {connect} from 'react-redux';
import {smurfData, addSmurf} from './actions/index';

class App extends Component {

  componentDidMount(){
    this.props.smurfData();
  }
  render() {
    return (
      <div className="App">
        <h2>Blue mini me</h2>
        <SmurfList smurf={this.props.smurf}/>
        <Form addSmurf={this.props.addSmurf}/>
        
      </div>
    );
  }
}


const mapStateToProps = state => {
  return{
  addSmurf: state.addSmurf,
  smurf: state.smurf
  }
}
export default connect(mapStateToProps, {smurfData, addSmurf})(App);
