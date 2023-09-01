import React, { Component } from 'react'

export class DesignComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            btnStyle: {
                width:'200px',
                height:'50px',
                border: '2 px solid green',
                borderRadius: '5px',
                fontsize: '12px'
            }
        }
    }
  render() {
    return (<>
        <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="https://icons8.com/icon/114610/enter" alt="" width="72" height="57"/>
    <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" fdprocessedid="fzbyy9">Primary button</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="i2urel">Secondary</button>
      </div>
    </div>
  </div>
      </>
    )
  }
}

export default DesignComponent