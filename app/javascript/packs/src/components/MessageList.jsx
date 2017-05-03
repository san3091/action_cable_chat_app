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
    let headers = new Headers({
      Accept: 'application/json'
    })
    
    fetch('/messages.json', { method: 'get', headers: headers })
    .then( data => data.json())
    .then( json => {
      this.setState({
        messages: json
      })
    })
  }

  render() {
    return (
      <div className="messages" id="messages">
        <div className="messages-table" id="messages-table">
          {this.state.messages.map( (message, index) => (
            <Message content={message.content} user={message.user} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default MessageList