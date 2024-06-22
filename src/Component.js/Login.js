import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Login=()=>{
    const navigate=useNavigate()
    const [input,SetInput]=useState({
        username:"",
        password:""
    })
    const handleInput=(e)=>{
        SetInput({...input,[e.target.name]:e.target.value})
    }
    const handleForm=(e)=>{
            e.preventDefault()
            const logedInUser=JSON.parse(localStorage.getItem("User"))
            if(input.username===logedInUser.username && input.password===logedInUser.password){
                localStorage.setItem("Logedin",true)
               const logedin= localStorage.getItem("Logedin")
               if(logedin){
                navigate("/")
               }
                alert("Login Successful")
            }
            else{
                alert("invalid user or pwd")
            }
    }
    //     useEffect(()=>{
    //   axios.get(`https://dummyjson.com/auth/login`,{
    //     // authority: 'dummyjson.com',
    //     method:"get",
    //     headers: {
    //         'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzE3NjE1MzQwfQ.eQnhQSnS4o0sXZWARh2HsWrEr6XfDT4ngh0ejiykfH8",
    //        "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzIwMjAzNzQwfQ.YsStJdmdUjKOUlbXdqze0nEScCM_RJw9rnuy0RdSn88",
    //         'Accept' : 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    //    ,
    //     body:JSON.stringify({
    //         username: 'emilys',
    //         password: 'emilyspass',
    //         expiresInMins: 30
    //     })
    //   }).then((res)=>{
    //     alert(res)
    //   })
    // },[])
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <div className="col-lg-4 col-md-4 col-sm-8 formContainer">
                <form onSubmit={handleForm}>
                <h2 className="formHead">Login Form</h2>

                    <div className="row gap-2">
                        <label htmlFor="email">username</label>
                        <div className="col-12">
                            <input type="text" id="username" name="username"
                            required
                            value={input.username}
                            onChange={handleInput}
                            />

                        </div>
                        <label>password</label>
                        <div className="col-12">
                            <input type="password" 
                            required
                            id="password"
                            value={input.password}
                            name="password"
                            onChange={handleInput}
                            />

                        </div>
                        <div className="col-12">
                            <button className="signupBtn" type="submit">Signin</button>

                        </div>

                    </div>
                </form>

            </div>

        </div>
        </>
    )
}
export default Login