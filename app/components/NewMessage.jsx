import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newChat, newSpeaker} from '../reducers/chatReducer.js' 

 class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`New chat message: ${this.state.value} from ${this.props.name}`);
    this.props.newSpeaker(this.props.name)
    this.props.newChat(this.state.value)
    this.setState({value: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          New Message:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(null, {newChat, newSpeaker})(NewMessage)