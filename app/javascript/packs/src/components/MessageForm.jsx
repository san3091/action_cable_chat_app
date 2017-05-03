import React, { Component } from 'react'
import MessageInput from './MessageInput'

class MessageForm extends Component {
  constructor(props) {
    super()
    this.state = {
      message: "write"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.message)
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