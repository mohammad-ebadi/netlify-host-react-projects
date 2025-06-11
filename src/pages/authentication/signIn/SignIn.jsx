import { useState } from "react";
import style from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";

export default function SignIn({onSignIn}) {
    const [username , setUsername] = useState("")
    const [password , setPassword ]= useState("")
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(username && password){
            onSignIn()
            navigate("/")
        }
    }
  return (
    <div className={style.background}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.content}>
            <h1>React Projects</h1>
        <p><b>Sign In</b></p>
          <input type="text" placeholder="Email ..." onChange={(e)=>setUsername(e.target.value)} required />
          <br />
          <input type="password" placeholder="Password ..." onChange={(e)=>setPassword(e.target.value)} required />
          <br />
          <button type="submit">Sign In</button>
          <p className={style.signupLink}>
              Don't have an account? <span onClick={() => navigate("/signUp")}>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
}
