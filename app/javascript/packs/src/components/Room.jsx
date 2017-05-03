import React from 'react'

const Room = (props) => (
  <div className="message-wr">
    <div className="messages" id="messages">
      { props.children }
    </div>
  </div>
)

export default Room