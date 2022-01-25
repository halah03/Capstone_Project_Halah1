import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from "axios"



export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function login(e) {
        let users = {
            email: email,
            password: password,
        }
        e.preventDefault();
        console.log({ email, password });       
        axios({
            method: "get",
            url: 'api/moeen/login',
            params: { email: email , password: password}
        })
 .then((res => {
        console.log(res.data)
        if (res.data == "authenticated") {
       
        localStorage.setItem("isLoggedln","yes")
     
        window.open("/pages","_self")
        }
        else {

            alert(res.data)
        }
    }))
}
    return (
      
            <div>

            <div>
                <h1>تسجيل دخول الموظفين</h1>
            </div>
            <div>
                <div >
                    <form>
                        <div >
                            <label>الايميل</label>
                            <input type="email" required="required" onChange={ e=>setEmail(e.target.value)}/>
                            
                        </div>
                        <br></br>
                        <div>
                            <label >كلمة السر</label>
                            <input type="password" required="required" onChange={e => setPassword(e.target.value)}/>
                            
                            <div></div>
                        </div>
                        <br></br>

                        <div >
                            <Link to="/login"></Link><button class="button" onClick={login} > 
                            <span>تسجيل</span></button>
                        </div>

                        <br></br>
                    </form>
                </div>
              
            </div>
        
        </div>
    )
    }