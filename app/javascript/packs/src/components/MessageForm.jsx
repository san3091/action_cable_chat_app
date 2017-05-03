import React, { Component } from 'react'
import MessageInput from './MessageInput'
import { messageUtils } from '../utils/messageUtils'

class MessageForm extends Component {
  constructor(props) {
    super()
    this.state = {
      message: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    messageUtils.post(this.state.message)
    .then( json => console.log(json))
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <MessageInput value={this.state.message}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
    )
  }
}

export default MessageForm