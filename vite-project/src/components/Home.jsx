import React from "react";

function Home(){
    function cli(){
        alert("hi");
    }
    return (<div>
                <form >
                    <label>Name: </label>
                    <input type="text" name="name" placeholder="Name"></input><br></br>
                    <label>Work: </label>
                    <input type="text" name="work" placeholder="Work"></input><br></br>
                    <button type="sumbit" onClick={()=>cli()}>sumbit</button>
                </form>
            </div>);
}

export default Home;