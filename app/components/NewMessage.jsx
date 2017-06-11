import React from 'react'
import {Glyphicon} from 'react-bootstrap'

 const NewMessage = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
          <Glyphicon glyph="paperclip" /><input type="text" className="type-message" placeholder="Type a message" value={props.value} onChange={props.handleChange} />
        <input type="submit" value="SEND" />
      </form>
    );
  }

export default NewMessage
