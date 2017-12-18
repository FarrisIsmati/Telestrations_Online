import React, { Component } from 'react'
import PropTypes            from 'prop-types'

//CSS
import                           './Canvas.css'
import                           '../../../Stylesheets/CommonStyles.css'

class Canvas extends Component {
  constructor(props){
    super(props)

    this.state = {
      canvasWidth: '',
      canvasHeight: '',
      clickX: [],
      clickY: [],
      clickDrag: [],
      color: '#FFFFFF',
      paint: false
    }

    this.onMouseDown    = this.onMouseDown.bind(this)
    this.addClick       = this.addClick.bind(this)
    this.onMouseMove    = this.onMouseMove.bind(this)
    this.onMouseLeave   = this.onMouseLeave.bind(this)
    this.redraw         = this.redraw.bind(this)
    this.onSave         = this.onSave.bind(this)
    this.changeColor    = this.changeColor.bind(this)
    this.resizeCanvas   = this.resizeCanvas.bind(this)
  }

  // Sets up Canvas and handles drawing based on state of mouse position
  redraw(canvas){
    let context = canvas.getContext("2d")
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.lineJoin = "round"
    context.lineWidth = 10

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
    this.addClick(e.pageX - canvas.offsetLeft + 5, e.pageY - canvas.offsetTop + 4)
    this.redraw(canvas)
  }

  onMouseMove(e, canvas) {
    if(this.state.paint){
      this.addClick(e.pageX - canvas.offsetLeft + 5, e.pageY - canvas.offsetTop + 4, true)
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

  //Call this function on ColorPicker changeColor
  changeColor(color) {
    this.setState({color: color.hex})
  }

  resizeCanvas() {
    this.setState({
      canvasWidth: this.refs.canvasHolder.offsetWidth,
      canvasHeight: this.refs.canvasHolder.offsetHeight
    })
  }

  // Save image as base64
  onSave(){
    let image = this.state.canvas.toDataURL()
    console.log(image)
  }

  componentDidMount() {
    this.setState({
      canvas: this.refs.canvas,
      canvasWidth: this.refs.canvasHolder.offsetWidth,
      canvasHeight: this.refs.canvasHolder.offsetHeight
    })

    window.addEventListener("resize", this.resizeCanvas)
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
      backgroundColor: backgroundColor
    }

    return (
      <div className="flex flex-column canvas-holder" ref="canvasHolder">
        <canvas className="canvas" ref='canvas' style={canvasStyle}
          onMouseDown={(e) => this.onMouseDown(e, e.target)}
          onMouseMove={(e) => this.onMouseMove(e, e.target)}
          onClick={(e) => this.onMouseClick(e, e.target)}
          onMouseLeave={(e) => this.onMouseLeave()}
          width={this.state.canvasWidth} height={height} />
        <div>
          {children}
          <p onClick={this.onSave}>Next</p>
        </div>
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
  borderWidth: '0px',
  borderRadius: '0px',
  borderColor: '#353535',
  backgroundColor: '#E24E24'
}
//Color Plalete
//Papaya #E24E24 Mustartd #E98000 Blush #EB6E80 Aqua #008F95
export default Canvas;
