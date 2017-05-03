import React, { Component } from 'react'

const Message = ({ content, user }) => (
  <div class="message">
    <div class="message-user">
      {user.username}
    </div>
    <div class="message-content">
      {content}
    </div>
  </div>
)

export default Message