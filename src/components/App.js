import React, {Component} from 'react';
import '../styles/App.css';

import Jumbotron from './Jumbotron';
import Form from './Form';
import VehicleCard from './VehicleCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    };

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  handleNameChange(event) {
    this.setState({
      pilot: this.name.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.setState({

    })
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentDidMount() {
  fetch('https://swapi.co/api/vehicles/')
  .then(result => (result.json()))
  .then((json) => {
    this.setState({
      vehicles: json
    })
  })
}

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {

    // let vehicles = vehicles.map()


    return (
      <div className="App container-fluid">
        <Jumbotron />
        <Form />
      </div>
    );
  }
}

export default App;