import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="container text-center">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="What is your name, pilot?" value={ this.state.value } onChange={ this.event.}/>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
