import { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0
  //   }
  //   console.log("Constructor: ",this)
  //   this.increaseCount = this.increaseCount.bind(this)
  // }

  //  increaseCount = () => { // one way to resolve the error when you use normal function in event listener (used to increase the count)
  //     this.setState({count: this.state.count + 1})
  // }
 

  render() {
    const {name} = this.props
return <>
    <h1 className="component-name my-3">{name}</h1>
        <div>
        <p onMouseEnter ={this.props.increaseCount} className="text-center text-2xl bg-yellow-400 cursor-pointer rounded-2xl p-4">{this.props.count}</p>
    </div>
    </>
  }
}

export default withCounter(HoverCounter)