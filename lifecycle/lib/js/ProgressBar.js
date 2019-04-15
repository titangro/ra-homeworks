class ProgressBar extends React.Component {
  render() {
    return (
      <canvas id="progressCanvas" className="progress" />
    );
  }

  componentDidMount() {
    const procent = this.getProcent(this.props);
    this.drawProgress(document.getElementById('progressCanvas'), procent);
  }

  componentWillUpdate(nextProps) {
    const procent = this.getProcent(nextProps);
    this.drawProgress(document.getElementById('progressCanvas'), procent);
  }

  getProcent(props) {
    return (props.completed / props.total*100).toFixed();
  }

  drawProgress(canvas, procent) {
    console.log(procent)
    if (canvas.getContext){      
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);  
      ctx.beginPath();
      ctx.fillStyle = "#000";
      ctx.strokeStyle = "#000";
      ctx.font = 'normal 25px sans-serif';
      ctx.lineWidth = 2;
      ctx.strokeText(procent + " %", canvas.width/2 - 25, canvas.height/2 + 10);    
      ctx.lineWidth = 7;
      ctx.arc(canvas.width/2, canvas.height/2, 52, 0, 2 * Math.PI);
      ctx.strokeStyle = '#4ca89a';
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, 45, 0, 2 * Math.PI * procent / 100);
      ctx.strokeStyle = '#96d6f4';
      ctx.stroke();
    }
  }
}
