import React, { Component } from 'react'
export default class RenderingComponent extends Component {
    constructor(props){
         super(props) 
         this.state ={text:"hello",show:false,lis:['apple','mango','papaya','guava']}
        }
    changeShow(){
        this.setState({
            show : !this.state.show,
        })
    }
    render() {
        var vart=this.state.show ? 'hide': 'show';
        return (<>
            <ul>
            {
                this.state.lis.map((a,b)=>{
                    return <li key={b}>{a}</li>
                })
            }
            </ul>
            <div>RenderingComponent</div>
            {this.state.show && this.state.text}
            <button onClick={()=> this.changeShow()}>{vart}</button>
            </>
        )
    }
}