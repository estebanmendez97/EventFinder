import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getEvent}>
        <input type='text' name='category' placeholder='choose a category'/>
        <button>Get Events</button>
      </form>
    );
  }
}

export default Form;
