
class Tooltip extends React.Component{
  constructior(props){
    super(props)
    this.state = {opacity:false}
    this.toggle = this.toogle.bind(this)
  }
  toggle(){
    const tooltipNode = ReactDOM.findDOMNode(this)
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    })
  }
  render(){
    const style ={
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) +20,
      left: (this.state.left || 0) -30
    }
    return(
      <div>
        <div></div>
      </div>

    )
  }

}

ReactDOM.render(
  <div>
    <Tooltip text="The book you're reading now">React Quickly</Tooltip>
    was published in 2020. It's awesome!
  </div>,
  document.getElementById('tooltip')

)
