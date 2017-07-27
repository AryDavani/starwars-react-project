import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    console.log('my props', this.props);
  }

  render() {
    return (
      <div className="container text-center">
        <form onSubmit={ this.props.handleFormSubmit }>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="What is your name, pilot?" value={ this.props.pilot } onChange={ this.props.handleNameChange }/>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
