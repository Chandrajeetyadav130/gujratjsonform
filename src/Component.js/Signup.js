import { useState ,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Signup = () => {
    const navigate=useNavigate()
    const [input,setInput]=useState({
        username:"",
        email:"",
        password:""
    
    })
    const handleInput=(e)=>{
      const {name,value}=e.target
      setInput({...input,[name]:value})
    }
    const formHandle=(e)=>{
     e.preventDefault()
     localStorage.setItem("User",JSON.stringify(input))
     alert("Submit successful")
     navigate("/Login")
    }
    useEffect(()=>{
      axios.get(`https://dummyjson.com/auth/register`,{
        // authority: 'dummyjson.com',
        method:"get",
        headers: {
            'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzE3NjE1MzQwfQ.eQnhQSnS4o0sXZWARh2HsWrEr6XfDT4ngh0ejiykfH8",
           "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzIwMjAzNzQwfQ.YsStJdmdUjKOUlbXdqze0nEScCM_RJw9rnuy0RdSn88",
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
       ,
        body:JSON.stringify({
            
                username: "chandrajeet",
                email: "chandrajeet@gmail.com",
                firstName: "chandrajeet",
                lastName: "yadav",
                gender: "male",
                image: "https://dummyjson.com/icon/emilys/129",
              
        })
      }).then((res)=>{
        alert(res)
      }).catch((err)=>{
        console.log(err.message)
      })
    },[])
    return (
        <>
            <div className="  " style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh" }}>
                <div className="col-lg-4 col-md-4 col-sm-8 col-12 formContainer px-4">
                    <form onSubmit={formHandle} className="">
                        <h2 className="formHead">Signup Form</h2>
                        <div className="row gap-2">
                            <label>User Name</label>
                            <div className="col-12">
                             <input name="username" value={input.username}
                             required
                             onChange={handleInput}
                             type="text" id="name" width="100%"/>
                            </div>
                            <label htmlFor="email">Email</label>
                            <div className="col-12">
                             <input type="text"
                             required
                             onChange={handleInput}
                             name="email" value={input.email} id="email" width="100%"/>
                            </div>
                            <label htmlFor="password">Password</label>
                            <div className="col-12">
                             <input type="text" 
                             required
                             onChange={handleInput}
                             name="password" value={input.password} id="password" width="100%"/>
                            </div>
                            <div className="col-12 ">
                              <button className="signupBtn" type="submit">Signup</button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>

         
        </>
    )
}
export default Signup