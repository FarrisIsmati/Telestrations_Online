import React, { Component } from 'react';

class Canvas extends Component {
  constructor(props){
    super(props)

    this.state = {
      clickX: [],
      clickY: [],
      clickDrag: [],
      paint: false
    }

    this.onMouseDown = this.onMouseDown.bind(this)
    this.addClick = this.addClick.bind(this)
    // this.redraw = this.redraw.bind(this)
  }

  // redraw(canvas){
  //   let context = canvas.getContext("2d");
  //   context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  //
  //   context.strokeStyle = "#df4b26"
  //   context.lineJoin = "round"
  //   context.lineWidth = 5
  //
  //   for(var i=0; i < clickX.length; i++) {
  //     context.beginPath()
  //     if(clickDrag[i] && i){
  //       context.moveTo(clickX[i-1], clickY[i-1])
  //      }else{
  //        context.moveTo(clickX[i]-1, clickY[i])
  //      }
  //      context.lineTo(clickX[i], clickY[i])
  //      context.closePath()
  //      context.stroke()
  //   }
  // }

  addClick(x, y, dragging) {
    this.setState({ clickX: this.state.clickX.concat([x]) })
    this.setState({ clickY: this.state.clickY.concat([y]) })
    this.setState({ clickDrag: this.state.clickDrag.concat([dragging]) })
  }

  onMouseDown(e) {
    let canvas = e.target
    // let mouseX = e.pageX - canvas.offsetLeft
    // let mouseY = e.pageY - canvas.offsetTop
    this.setState({ paint: true })
    this.addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop)
    //redraw(canvas)
  }

  render() {
    return (
      <div className='Canvas'>
        <p>Im a canvas</p>
        <canvas ref='canvas'
          onMouseDown={(e) => this.onMouseDown(e)}
          onMouseMove={(e) => this.onMouseMove(e)}
          width='490' height='220'></canvas>
      </div>
    );
  }
}

export default Canvas;
