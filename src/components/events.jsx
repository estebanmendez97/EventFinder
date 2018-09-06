import React, {Component} from 'react';

const Events = props => (
  <div>
    {props.eventInfo.map((event, i) => (
      <li><h3>{event[0]}</h3>
      <p>Place: {event[1]}</p>
      <p>Date:  {event[4]}</p></li>
    ))}
  </div>

)

export default Events;
