import React from 'react'

 const NewMessage = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
        <label>
          New Message:
          <input type="text" value={props.value} onChange={props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

export default NewMessage
