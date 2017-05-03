import React, { Component } from 'react'

const Message = ({ content, user }) => (
  <div className="message">
    <div className="message-user">
      {user.username}
    </div>
    <div className="message-content">
      {content}
    </div>
  </div>
)

export default Message