import { Component } from "react"



export default class Ccomponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        name : "baiel"
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      name: "web developer"
    })
  }


  render(){
    return (
      <div>
        <h1>{this.state.name} {this.props.title}</h1>
        <button onClick={this.handleClick}>click</button>
        
      </div>
    )
      
    
  }
}
