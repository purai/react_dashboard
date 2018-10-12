import React, { Component } from 'react'

class Event extends Component {

  handleClick = () => {
    this.props.onClick(this.props.event.id)
  }

  render () {
    return(
      <li>
        <h4 onClick={this.handleClick}>
          {this.props.event.title}
        </h4>
        <p onClick={this.handleClick}>
          {this.props.event.body}
        </p>
      </li>
    )
  }
}

export default Event