import React from 'react'
import PropTypes from 'prop-types'

const MessageInput = props => (
  <div className="message-input">
    <form>
      <textarea value={props.value} onChange={props.handleChange}/>
      <button onClick={props.handleSubmit}>Send</button>
    </form>
  </div>
)

MessageInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MessageInput