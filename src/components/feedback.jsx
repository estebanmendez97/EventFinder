import React, {Component} from 'react';

class Comments extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments : ''
    }
    this.handleComments = this.handleComments.bind(this);
    this.add = this.add.bind(this);

  }

  handleComments(e){
    e.preventDefault();
    this.setState({comments: e.target.value})
  }

  add(e){
    e.preventDefault();
    this.props.addComment(this.state.comments);
    this.setState({
      comments : ''
    })
  }

  render() {
    return (
      <div>
      <form>
        <input type='text' placeholder='leave your comments down here' value={this.state.comments} onChange={this.handleComments}></input>
        <button onClick={this.add}> Send </button>
      </form>
      </div>
    );
  }
}

export default Comments;
