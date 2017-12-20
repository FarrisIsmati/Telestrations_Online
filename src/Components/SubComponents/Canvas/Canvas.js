import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

import CanvasInput          from '../CanvasInput/CanvasInput'

import                           './Canvas.css'
import                           '../../../Stylesheets/CommonStyles.css'

class Canvas extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: 'anonymous',
      setPlayers: 0,
      clickX: [],
      clickY: [],
      clickDrag: [],
      color: '#C0B283',
      paint: false
    }

    this.setInput       = this.setInput.bind(this)
    this.onMouseDown    = this.onMouseDown.bind(this)
    this.addClick       = this.addClick.bind(this)
    this.onMouseMove    = this.onMouseMove.bind(this)
    this.onMouseLeave   = this.onMouseLeave.bind(this)
    this.redraw         = this.redraw.bind(this)
    this.onSave         = this.onSave.bind(this)
  }

  // Sets up Canvas and handles drawing based on state of mouse position
  redraw(canvas){
    canvas.oncontextmenu = (e) => e.preventDefault()
    let context = canvas.getContext("2d")
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.lineJoin = "round"
    context.lineWidth = 8
    context.fillStyle = '#f4f4f4';
    context.fillRect(0, 0, canvas.width, canvas.height)

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
    this.addClick(e.pageX - canvas.offsetLeft + 8, e.pageY - canvas.offsetTop + 8)
    this.redraw(canvas)
  }

  onMouseMove(e, canvas) {
    if(this.state.paint){
      this.addClick(e.pageX - canvas.offsetLeft + 8, e.pageY - canvas.offsetTop + 8, true)
      this.redraw(canvas)
    }
  }

  onMouseClick(e, canvas){
    if (this.state.paint){
      this.setState({ paint: false })
      this.redraw(canvas)
    } else {
      this.setState({ paint: true })
    }
  }

  onMouseLeave(e){
    this.setState({paint: false})
  }

  // Save image as base64
  onSave(){
    let image = this.state.canvas.toDataURL()
    axios.post(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}/history`, {
        'drawing': image,
        'name': this.state.name
      })
      .then((response) => {
        this.props.requestdata()
      })
      .catch((err) => console.log(err))
  }

  setInput(e) {
    this.setState({name: e.target.value})
  }

  componentDidMount() {
    this.setState({
      canvas: this.refs.canvas
    })
  }

  componentDidUpdate() {
    this.redraw(this.state.canvas)
  }

  render() {
    const {
      height,
      width,
      borderWidth,
      borderRadius,
      borderColor,
      backgroundColor,
      children
    } = this.props

    const canvasStyle = {
      border: `${borderWidth} solid ${borderColor}`,
      borderRadius: borderRadius,
      backgroundColor: backgroundColor,
    }

    return (
      <div className="flex flex-column-center canvas-holder" ref="canvasHolder">
        <canvas className="canvas" ref='canvas' style={canvasStyle}
          onMouseDown={(e) => this.onMouseDown(e, e.target)}
          onMouseMove={(e) => this.onMouseMove(e, e.target)}
          onClick={(e) => this.onMouseClick(e, e.target)}
          onMouseLeave={(e) => this.onMouseLeave()}
          height={height} width={width}/>
        <CanvasInput {...this.props} setinput={this.setInput} children={children} save={this.onSave} />
      </div>
    )
  }
}

Canvas.propTypes = {
  height: PropTypes.string,
  borderWidth: PropTypes.string,
  borderRadius: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node
}

Canvas.defaultProps = {
  height: '350px',
  width: '700px',
  borderWidth: '5px',
  borderRadius: '5px',
  borderColor: '#373737',
  backgroundColor: '#F4F4F4'
}

export default Canvas;
