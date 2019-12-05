import React, {useState} from 'react';
import {AddSmurf, FetchSmurf } from "../actions/index";
import {connect} from 'react-redux';


const SmurfForm = (props)=>{
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');

        const handleName = e =>{
            setName(
                e.target.value
            )

        }
        const handleAge = e =>{
            setAge(
                e.target.value
            )

        }
        const handleHeight = e =>{
            setHeight(
                e.target.value
            )

        }
        const handleSubmit = e =>{
            e.preventDefault();
            props.AddSmurf(name, height, age)
            setName('');
            setAge('');
            setHeight('');
        }
     

    return(
        <form onSubmit= {handleSubmit}>
             <input 
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleName}
          />
        
          <input 
            type="number"
            placeholder="Age"
            name="age"
            value={age}
            onChange={handleAge}
          />
      
          <input 
            type="text"
            placeholder="Height"
            name="height"
            value={height}
            onChange={handleHeight}
          />
        
          <button>Submit</button>
        
        </form>
    )
}

export default connect (null,{AddSmurf, FetchSmurf})(SmurfForm)