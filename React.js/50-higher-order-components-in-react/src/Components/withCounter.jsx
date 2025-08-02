import { Component } from "react";

const withCounter = (WrappedComponent) => {
  return  class NewComponent extends Component {
    constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log("Constructor: ",this)
    this.increaseCount = this.increaseCount.bind(this)
  }

   increaseCount = () => { // one way to resolve the error when you use normal function in event listener (used to increase the count)
      this.setState({count: this.state.count + 1})
  }
        render() {
            return <WrappedComponent count= {this.state.count} increaseCount = {this.increaseCount} {...this.props}/>
        }
    }
}

export default withCounter