import React from "react"

function Home(){
    return (<div class="login">
        <form>
            <label>username:</label>
            <input type="text"></input>
            <br></br>
            <label>password: </label>
            <input type="password"></input><br></br>
            <button type="sumbit">sumbit</button>
        </form>
    </div>)
}
export default Home