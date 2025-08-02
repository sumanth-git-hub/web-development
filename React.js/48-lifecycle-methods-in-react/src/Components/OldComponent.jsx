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
  }

  componentDidMount(){ // run after the component added to the DOM
    console.log("componentDidMount")
    console.log(document.querySelector(".component-name"))

    // this.runTimer = setInterval(() => {
    //   console.log("Did Mount")
    // },10000)
  }

  componentDidUpdate() { // runs after the prop/state updated
    console.log("componentDidUpdate")
  }

  componentWillUnmount() { // runs when the component is removed from DOM
    console.log("componentWillUnmount")

    // clearInterval(this.runTimer) // the mount is cleared here
  }

  render() {
    console.log("Render: ",this)

    const {name, titleTagDec, titleTagInc} = this.props

    const {count} = this.state

    return <>
    <h1 className="component-name">{name}</h1>
        <div className="flex gap-4 items-center">
        <button className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer" title={titleTagDec} onClick={(e) => {
            // setCount(count - 1)
            this.setState({count: count - 1})
        }}>-</button>
        <p className="w-5 text-center">{count}</p>
        <button className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer" title={titleTagInc} onClick={() => {
            // setCount(count + 1)
            this.setState({count: count + 1})
        }}>+</button>
    </div>
    </>
  }
}

export default OldComponent