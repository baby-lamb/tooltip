
class Tooltip extends React.Component{
  constructior(props){
    super(props)
    this.state = {opacity:false}
    this.toggle = this.toogle.bind(this)
  }
  toggle(){

  }
  render(){

  }

}

ReactDOM.render(
  <div>
    <Tooltip text="The book you're reading now">React Quickly</Tooltip>
    was published in 2020. It's awesome!
  </div>,
  document.getElementById('tooltip')

)
