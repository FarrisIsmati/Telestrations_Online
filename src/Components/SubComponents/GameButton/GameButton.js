import React, { Component } from 'react'
import PropTypes            from 'prop-types'

class GameButton extends Component {
  render() {
    const {
      title,
      onClick
    } = this.props

    return (
      <div onClick={onClick}>
        {title}
      </div>
    )
  }
}

GameButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

GameButton.defaultProps = {
  title: "Next"
}

export default GameButton
