import React, { Component } from 'react';
import API_KEY from './Api.js';
import Form from './components/form.jsx';
import Events from './components/events.jsx';
import Map from './components/map.jsx';

class App extends Component {

  getEvent = async () => {
    const api_call = await fetch(`http://api.eventful.com/json/events/search?app_key=${API_KEY}&where=38.9072,-77.0369&within=5`);
    const data = await api_call.json();
    console.log(data);
  }



  render() {
    return (
      <div>
        <Form getEvent={this.getEvent}/>
        <Events />
        <Map />
      </div>
    );
  }
}

export default App;
