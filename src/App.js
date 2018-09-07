import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
//import Home from './components/Home';
import API_KEY from './Api.js';
import Form from './components/form.jsx';
import Events from './components/events.jsx';
import Map from './components/map.jsx';
import $ from 'jquery';
import Comments from './components/feedback.jsx';


class App extends Component {
 constructor (props){
   super(props);
   this.state = {
     eventList: [],
     lat: null,
     lon: null,
     comments:''
   }
   this.getEvent = this.getEvent.bind(this);
   this.addComment= this.addComment.bind(this);
 }

 addComment(comments) {

   $.ajax({
     url:'/',
     type: "POST",
     contentType: 'application/json',
     data: JSON.stringify({
       comments: comments
     }),
     success: (data)=> {
     },
     error: (xhr,status,error) => {
     }
   });
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
       <Comments addComment={this.addComment}/>
     </div>
   );
 }
}

export default App;
