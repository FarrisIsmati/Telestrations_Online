import React, { Component } from 'react';

// Tutorial http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/#demo-simple
class Canvas extends Component {
  constructor(props){
    super(props)

    this.state = {
      clickX: [],
      clickY: [],
      clickDrag: [],
      paint: false
    }

    this.onMouseDown    = this.onMouseDown.bind(this)
    this.addClick       = this.addClick.bind(this)
    this.onMouseMove    = this.onMouseMove.bind(this)
    this.onMouseLeave   = this.onMouseLeave.bind(this)
    this.redraw = this.redraw.bind(this)
  }

  // Sets up Canvas and handles drawing based on state of mouse position
  redraw(canvas){
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)

    context.strokeStyle = "#df4b26"
    context.lineJoin = "round"
    context.lineWidth = 5

    for(let i = 0; i < this.state.clickX.length; i++) {
      context.beginPath()
      if(this.state.clickDrag[i] && i){
        context.moveTo(this.state.clickX[i-1], this.state.clickY[i-1])
       }else{
         context.moveTo(this.state.clickX[i]-1, this.state.clickY[i])
       }
       context.lineTo(this.state.clickX[i], this.state.clickY[i])
       context.closePath()
       context.stroke()
    }
  }

  addClick(x, y, dragging) {
    this.setState({ clickX: this.state.clickX.concat([x]) })
    this.setState({ clickY: this.state.clickY.concat([y]) })
    this.setState({ clickDrag: this.state.clickDrag.concat([dragging]) })
  }

  onMouseDown(e, canvas) {
    this.setState({ paint: true })
    this.addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop)
    this.redraw(canvas)
  }

  onMouseMove(e, canvas) {
    if(this.state.paint){
      this.addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, true)
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

  render() {
    return (
      <div className='Canvas'>
        <p>Im a canvas</p>
        <canvas ref='canvas'
          onMouseDown={(e) => this.onMouseDown(e, e.target)}
          onMouseMove={(e) => this.onMouseMove(e, e.target)}
          onClick={(e) => this.onMouseClick(e, e.target)}
          onMouseLeave={(e) => this.onMouseLeave()}
          width='490' height='220'></canvas>
      </div>
    );
  }
}

export default Canvas;
