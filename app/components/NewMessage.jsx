import React from 'react'
import {Glyphicon} from 'react-bootstrap'

 const NewMessage = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
          <Glyphicon glyph="paperclip" /><input type="text" className="type-message" placeholder={`Type a message to ${props.talkingTo}`} value={props.value} onChange={props.handleChange} required />
        <input type="submit" value="SEND" />
      </form>
    );
  }

export default NewMessage
