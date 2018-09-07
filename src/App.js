import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
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
   await fetch (`http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${this.state.lat}, ${this.state.lon}&within=14&c=music`)
    .then(res => res.json())
    .then(data => {
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
   return (
     <div>
       <Form getEvent={this.getEvent}/>
       <Events eventList={this.state.eventList.map((item,i) => <li key={i}>{item.title}</li>)}/>
       <Map />
       <BrowserRouter>
        <switch>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />

        </switch>
        </BrowserRouter>


     </div>
   );
 }
}

export default App;
