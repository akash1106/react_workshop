import React, { Component } from 'react'

export class AboutClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: this.props.name,
       work: this.props.work,
       count:0,
       username:""
    }
  }

  click(){
    this.setState({
      count :this.state.count+1
    })
  }

  inputchange(event){
    this.setState({
      username:event.target.value,
    })
  }

  render() {
    // this.state.name=  "About class components"
    return (<>
        <h3>AboutClass:<br></br>
        <b>Name: {this.state.name} </b><br></br>
        <b>work: {this.state.work}</b><br></br>
        <b>count:{this.state.count}</b><br></br>
        <b>useername:{this.state.username}</b><br></br></h3>
        <input onChange={(event)=>this.inputchange(event)}/><br></br>
        <button onClick={()=>this.click()}>click</button>
        </>
    )
  }
}

export default AboutClass