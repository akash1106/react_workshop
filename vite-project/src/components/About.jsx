import React, { useState } from 'react'

function About(props) {
  const [name,setName]=useState("");
  const [work,setWork]=useState("")
  function namechange(event){
    setName(event.target.value);
    console.log(name);
  }
  function workchange(event){
    setWork(event.target.value);
  }
  return (<>
    <h3>About:<br></br>
    <b>Name: {name}</b><br></br>
    <b>work:{work}</b></h3><br></br>
    <input onChange={(event)=>namechange(event)}/><br></br>
    <input onChange={(event)=>workchange(event)}/>
    </>
  )
}

export default About