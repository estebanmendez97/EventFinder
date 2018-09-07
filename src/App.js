import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
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
     lon: null,
     category: ''
   }
   this.getEvent = this.getEvent.bind(this);
   this.getCategory= this.getCategory.bind(this);
 }


 getEvent = async () => {
   await fetch (`http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${this.state.lat}, ${this.state.lon}&within=14&t=today`)
    .then(res => res.json())
    .then(data => {
    this.setState({
        eventList: data.events.event
      })
    })
 }

 getCategory(categorySelected) {
    fetch (`http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${this.state.lat}, ${this.state.lon}&within=14&t=today&c=${categorySelected}`)
    .then(res => res.json())
    .then(data => {
      if (data.events === null) {
        return alert('Sorry!!..there are no '+ categorySelected +' events scheduled today');
      }
    this.setState({
        eventList: data.events.event
      })
    })
 }

 componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      })
      this.getEvent();
    });
 }


 render() {

   var eventInfo = this.state.eventList.map((item) => [item.title, item.venue_name, item.longitude, item.latitude, item.start_time]);

   return (
     <div>
       <Form getCategory={this.getCategory} getEvent={this.getEvent}/>
       <Events eventInfo ={eventInfo}/>
       <Map eventInfo ={eventInfo}/>
     </div>
   );
 }
}

export default App;
