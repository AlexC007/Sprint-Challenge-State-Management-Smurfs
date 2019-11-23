import React from 'react'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      age: '',
      height: '',
      id: '',
     };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state)
  }

  handleInputChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            New Blue Mini Me
          </label>
         
          <input 
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChanges}
          />
        
          <input 
            type="number"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChanges}
          />
      
          <input 
            type="text"
            placeholder="Height"
            name="height"
            value={this.state.height}
            onChange={this.handleInputChanges}
          />
        
          <button onSubmit={this.handleFormSubmit} >Submit</button>
        </form>
      </div>
    );
  }
}



export default Form;