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
          <textarea value={this.state.message}/>
          <input type="submit" onClick={this.handleSubmit}>Send</input>
        </form>
      </div>
    )
  }
}