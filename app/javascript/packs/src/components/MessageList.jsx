import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.fetchMessages = this.fetchMessages.bind(this)
  }

  componentWillMount() {
    this.fetchMessages()
  }

  fetchMessages() {
    console.log("fetching messages")
    fetch('/messages.json')
    .then( data => data.json())
    .then( json => {
      console.log(json)
      this.setState({
        messages: json
      })
    })
  }

  render() {
    return (
      <div className="messages-table" id="messages-table">
        {this.state.messages.map( (message, index) => (
          <Message content={message.content} user={message.user} key={index} />
        ))}
      </div>
    )
  }
}

export default MessageList