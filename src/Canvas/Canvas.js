import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import ColorPicker          from './ColorPicker'

//CSS
import                           './Canvas.css'
import                           '../Stylesheets/CommonStyles.css'

class Canvas extends Component {
  constructor(props){
    super(props)

    this.state = {
      clickX: [],
      clickY: [],
      clickDrag: [],
      color: '#353535',
      paint: false
    }

    this.onMouseDown    = this.onMouseDown.bind(this)
    this.addClick       = this.addClick.bind(this)
    this.onMouseMove    = this.onMouseMove.bind(this)
    this.onMouseLeave   = this.onMouseLeave.bind(this)
    this.redraw         = this.redraw.bind(this)
    this.onSave         = this.onSave.bind(this)
    this.changeColor    = this.changeColor.bind(this)
  }

  // Sets up Canvas and handles drawing based on state of mouse position
  redraw(canvas){
    let context = canvas.getContext("2d")
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.lineJoin = "round"
    context.lineWidth = 9

    for(let i = 0; i < this.state.clickX.length; i++) {
      context.beginPath()
      if (this.state.clickDrag[i] && i) {
        context.moveTo(this.state.clickX[i-1], this.state.clickY[i-1])
      } else {
        context.moveTo(this.state.clickX[i]-1, this.state.clickY[i])
      }
       context.lineTo(this.state.clickX[i], this.state.clickY[i])
       context.closePath()
       context.strokeStyle = this.state.color
       context.stroke()
    }
  }

  // Sets state of mouse position
  addClick(x, y, dragging) {
    this.setState({ clickX: this.state.clickX.concat([x]) })
    this.setState({ clickY: this.state.clickY.concat([y]) })
    this.setState({ clickDrag: this.state.clickDrag.concat([dragging]) })
  }

  onMouseDown(e, canvas) {
    this.setState({ paint: true })
    this.addClick(e.pageX - canvas.offsetLeft - 2, e.pageY - canvas.offsetTop - 3)
    this.redraw(canvas)
  }

  onMouseMove(e, canvas) {
    if(this.state.paint){
      this.addClick(e.pageX - canvas.offsetLeft - 2, e.pageY - canvas.offsetTop - 3, true)
      this.redraw(canvas)
    }
  }

  //On Mouse Click
  onMouseClick(e, canvas){
    if (this.state.paint){
      this.setState({ paint: false })
      this.redraw(canvas)
    } else {
      this.setState({ paint: true })
    }
  }

  //On Mouse Leave Stop painting
  onMouseLeave(e){
    this.setState({paint: false})
  }

  changeColor(color) {
    this.setState({color: color.hex})
  }

  // Save image as base64
  onSave(e){
    let image = this.state.canvas.toDataURL()
  }

  componentDidMount() {
    this.setState({canvas: this.refs.canvas})
  }

  componentDidUpdate() {
    this.redraw(this.state.canvas)
  }

  render() {
    const {
      width,
      height,
      borderWidth,
      borderRadius,
      borderColor
    } = this.props

    const canvasBorderStyle = {
      border: `${borderWidth} solid ${borderColor}`,
      borderRadius: borderRadius
    }

    return (
      <div className="flex">
        <canvas className="canvas" ref='canvas' style={canvasBorderStyle}
          onMouseDown={(e) => this.onMouseDown(e, e.target)}
          onMouseMove={(e) => this.onMouseMove(e, e.target)}
          onClick={(e) => this.onMouseClick(e, e.target)}
          onMouseLeave={(e) => this.onMouseLeave()}
          width={width} height={height} />
        <div className="canvas-tools-holder">
          <ColorPicker changeColor={this.changeColor} />
        </div>
      </div>
    )
  }
}

Canvas.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderWidth: PropTypes.string,
  borderRadius: PropTypes.string,
  borderColor: PropTypes.string
}

Canvas.defaultProps = {
  width: '100%',
  height: '100% ',
  borderWidth: '1px',
  borderRadius: '4px',
  borderColor: '#353535'
}

export default Canvas;
