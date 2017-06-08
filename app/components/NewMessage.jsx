import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {imTyping} from './sockets.js'

 export default class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    imTyping()
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`NEW CHAT MESSAGE: ${this.state.value} FROM: ${this.props.name}`);
    this.props.sendMessage(this.state.value, this.props.name, moment().format("hh:mm:ss a"))
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
