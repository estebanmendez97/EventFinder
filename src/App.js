import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import API_KEY from './Api.js';
import Form from './components/form.jsx';
import Events from './components/events.jsx';
import Map from './components/map.jsx';
import axios from 'axios';

class App extends Component {
 constructor (){
   super();
   this.state = {
     eventList: [],
     isLoades: false
   }
 }

 componentDidMount() {
   this.getEvent;
 }

 getEvent = (e) => {
   e.preventDefault()
   const api_call = axios.get(`http://api.eventful.com/json/events/search?app_key=${API_KEY}&where=38.9072,-77.0369&within=5`);
   console.log(api_call)
   return api_call;
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
