import React, { Component } from 'react'
import Message from './Message'
import messageUtils from '../utils/messageUtils'

class MessageList extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.fetchMessages      = this.fetchMessages.bind(this)
    this.updateMessagesList = this.updateMessagesList.bind(this)
    this.setupSubscription  = this.setupSubscription.bind(this)
  }

  componentWillMount() {
    this.fetchMessages()
    this.setupSubscription()
  }

  fetchMessages() {
    messageUtils.list()
    .then( data => data.json())
    .then( json => {
      this.setState({
        messages: json
      })
    })
  }

  updateMessagesList(message) {
    let messages = this.state.messages.slice()
    messages.push(message)
    this.setState({ messages })
  }

  // setup ActionCable subscription
  setupSubscription() {
    App.comments = App.cable.subscriptions.create("RoomChannel", {

        connected: function () { console.log("connected to room channel")},

        received: function (data) {
          this.updateMessagesList(data.message);
        }
      }
    )
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