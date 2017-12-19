import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

//Imports
import CanvasInput          from '../CanvasInput/CanvasInput'

//CSS
import                           './Canvas.css'
import                           '../../../Stylesheets/CommonStyles.css'

class Canvas extends Component {
  constructor(props){
    super(props)

    this.state = {
      setPlayers: 0,
      canvasWidth: '',
      canvasHeight: '',
      clickX: [],
      clickY: [],
      clickDrag: [],
      color: '#C0B283',
      paint: false
    }

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
    context.lineWidth = 10
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
    console.log("Firing")
    let image = this.state.canvas.toDataURL()
    axios.post(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}/history`, {
        'drawing': image
      })
      .then((response) => {
        this.props.requestdata()
      })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.setState({
      canvas: this.refs.canvas,
      canvasWidth: this.refs.canvasHolder.offsetWidth,
      canvasHeight: this.refs.canvasHolder.offsetHeight
    })
  }

  componentDidUpdate() {
    this.redraw(this.state.canvas)
  }

  render() {
    const {
      height,
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
      <div className="flex flex-column canvas-holder" ref="canvasHolder">
        <canvas className="canvas" ref='canvas' style={canvasStyle}
          onMouseDown={(e) => this.onMouseDown(e, e.target)}
          onMouseMove={(e) => this.onMouseMove(e, e.target)}
          onClick={(e) => this.onMouseClick(e, e.target)}
          onMouseLeave={(e) => this.onMouseLeave()}
          width={this.state.canvasWidth} height={height}
          />

        <CanvasInput {...this.props} children={children} save={this.onSave} />
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
  borderWidth: '5px',
  borderRadius: '5px',
  borderColor: '#373737',
  backgroundColor: '#F4F4F4'
}
//Color Plalete
//Papaya #E24E24 Mustartd #E98000 Blush #EB6E80 Aqua #008F95
export default Canvas;
