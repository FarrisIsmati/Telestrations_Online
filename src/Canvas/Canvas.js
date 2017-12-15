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

    this.onMouseDown    = this.onMouseDown.bind(this)
    this.addClick       = this.addClick.bind(this)
    this.onMouseMove    = this.onMouseMove.bind(this)
    this.onMouseLeave   = this.onMouseLeave.bind(this)
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

  onMouseDown(e, canvas) {
    // let mouseX = e.pageX - canvas.offsetLeft
    // let mouseY = e.pageY - canvas.offsetTop
    this.setState({ paint: true })
    this.addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop)
    //redraw(canvas)
  }

  onMouseClick(){
    if (this.state.paint){
      this.setState({ paint: false })
      console.log(this.state)
    } else {
      this.setState({ paint: true })
    }
  }

  onMouseMove(e, canvas) {
    if(this.state.paint){
      this.addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, true)
      console.log(this.state)
      //redraw();
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
          onClick={(e) => this.onMouseClick()}
          onMouseLeave={(e) => this.onMouseLeave()}
          width='490' height='220'></canvas>
      </div>
    );
  }
}

export default Canvas;
