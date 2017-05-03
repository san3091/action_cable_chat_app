import React, { Component } from 'react'

class MessageForm extends Component {
  constructor(props) {
    super()
    this.state = {
      message: "write"
    }
  }

  handleSubmit(e) {
    console.log(e.target.value)
  }

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="message-input">
        <form onChange={this.handleChange}>
          <input value={this.state.message} type="text"/>
          <button onClick={this.handleSubmit}>Send</button>
        </form>
      </div>
    )
  }
}