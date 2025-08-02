import { Component } from "react";

class OldComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 0, // we can set the second state like this 
        }
         console.log("Constructor Method Called: ",this) // to get the values of the props inside the constructor we need to pass the props inside the constructor and super
    }
  render() {
    console.log("Render Method Called: ", this); // this brings all of the values together in one place
    // const { name } = this.props;
    // const {titleTagDec} = this.props;
    // const {titleTagInc} = this.props;

    const {name, titleTagInc, titleTagDec} = this.props

    // const {count} = this.state;
    // const {count2} = this.state;

    const {count, count2} = this.state

    // const {setCount} = this.setState
    // console.log(this.setState)
    return (
      <>
        <h3 className="my-2">{name}</h3>
        <div className="flex gap-4 items-center">
          <button
            className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer"
            title={titleTagDec}
            onClick={(e) => {
              this.setState({count: count - 1})
            }}
          >
            -
          </button>
          <p className="w-5 text-center">{count}</p>
          <button
            className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer"
            title={titleTagInc}
            onClick={() => {
                this.setState({count : count + 1})
            }}
          >
            +
          </button>
        </div>
        <div className="flex gap-4 items-center mt-4">
          <button
            className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer"
            title={titleTagDec}
            onClick={(e) => {
              this.setState({count2: count2 - 1})
            }}
          >
            -
          </button>
          <p className="w-5 text-center">{count2}</p>
          <button
            className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer"
            title={titleTagInc}
            onClick={() => {
                this.setState({count2 : count2 + 1})
            }}
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default OldComponent;
