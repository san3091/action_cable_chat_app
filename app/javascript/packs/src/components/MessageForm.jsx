import React, { Component } from 'react'

class MessageForm extends Component {
  constructor(props) {
    super()
    this.state = {
      message: "write"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    console.log(e.target.value)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div className="message-input">
        <form>
          <textarea value={this.state.message} onChange={this.handleChange}/>
          <input type="submit" value="Send" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default MessageForm