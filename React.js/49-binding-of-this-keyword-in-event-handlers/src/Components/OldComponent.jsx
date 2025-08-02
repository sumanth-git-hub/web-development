import { Component } from "react";

class OldComponent extends Component {
  constructor(props) {
    super(props)
    // console.log(this.state)
    this.state = {
      count: 0
    }
    console.log("Constructor: ",this)
    this.runTimer = null
    this.increaseCount = this.increaseCount.bind(this)
  }

  componentDidMount(){ // run after the component added to the DOM
    // console.log("componentDidMount")
    // console.log(document.querySelector(".component-name"))

    // this.runTimer = setInterval(() => {
    //   console.log("Did Mount")
    // },10000)
  }

  componentDidUpdate() { // runs after the prop/state updated
    // console.log("componentDidUpdate")
  }

  componentWillUnmount() { // runs when the component is removed from DOM
    // console.log("componentWillUnmount")

    // clearInterval(this.runTimer) // the mount is cleared here
  }

   increaseCount = () => { // one way to resolve the error when you use normal function in event listener (used to increase the count)
      this.setState({count: this.state.count + 1})
  }
 

  render() {
    console.log("Render: ",this)

    const {name, titleTagDec, titleTagInc} = this.props

    const {count} = this.state
return <>
    <h1 className="component-name">{name}</h1>
        <div className="flex gap-4 items-center">
        <button className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer" title={titleTagDec} 
        onClick = {function() { // another way to add bind to resolve the undefined due to normal function
          this.setState({count: count - 1})
        }.bind(this)}
        >-</button>
        <p className="w-5 text-center">{count}</p>
        <button className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer" title={titleTagInc} 
          // onClick={this.increaseCount.bind(this)} // one way to add bind (function written at the above)

          // onClick= {function() { // another way to add bind to resolve the undefined due to normal function
          //   this.setState({count: count + 1})
          // }.bind(this)}

          onClick ={this.increaseCount} // binding from the constructor 
          >+</button>
    </div>
    </>
  }
}

export default OldComponent