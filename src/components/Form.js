import { useState } from "react"

const Form= () => {

    const[email, setEmail] = useState("");

    const[password, setPassword] = useState("");

    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        if(email == "" || password ==""){
            alert("All field are required")
        }

        let user = {
            email: email,
            password:password
        }
    }

    return(
        <div>
            <h1>Login Form</h1>

            <form method="POST" onSubmit={handleLoginSubmit}>

                <input  type="email" name="email" placeholder="email" value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}/>

                <input  type="password" name="password" placeholder="password" value={password}
                 onChange={(e)=>{setPassword(e.target.value)}}/>

                <button type="submit">Login Now</button>
            </form>
        </div>
    )
}

export default Form