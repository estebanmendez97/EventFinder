import React, { Component } from 'react';
import API_KEY from './Api.js';
import Form from './components/form.jsx';
import Events from './components/events.jsx';
import Map from './components/map.jsx';

class App extends Component {
 constructor (props){
   super(props);
   this.state = {
     eventList: [],
     lat: null,
     lon: null
   }
   this.getEvent = this.getEvent.bind(this);
 }


 getEvent = async () => {
   await fetch (`http://eventful.com/json/events/search?app_key=${API_KEY}&where=${this.state.lat},${this.state.lon}&within=14&q=music`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data, data.events.tabular.events, this.state.lat, this.state.lon)
    this.setState({
        eventList: data.events.tabular.events[0].title

      })
    })
    console.log(this.state.eventList)
 }

 componentDidMount() {
   console.log("Nick was here")
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      })
      this.getEvent();
    });
 }




 render() {
   return (
     <div>
       <Form getEvent={this.getEvent}/>
       <Events eventList={this.state.eventList}/>
       <Map />
     </div>
   );
 }
}

export default App;
