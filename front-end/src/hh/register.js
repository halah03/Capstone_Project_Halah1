
import React, { useEffect, useState } from 'react'
import axios from "axios"



export default function Register() {

    const [id, setid] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [image, setimage] = useState("")
    const [questionId, setquestionId] = useState("")

// let questionid={"questionId":questions}

    const [myUser, setMyUser] = useState({ id: "", username: "", password: "", firstName: "", lastName: "", email: "",
     image:"",questionId:"" })

    function handelid(event) {
        setid((event.target.value));
    }
    function handelusername(event) {
        setusername((event.target.value));
    }
    function handelpassword(event) {
        setpassword((event.target.value));
    }
    function handelfirstname(event) {
        setfirstName((event.target.value));
    }
    function handellastname(event) {
        setlastName((event.target.value));
    }
    function handelemail(event) {
        setemail((event.target.value));
    }
    function handelFkey(event) {
        setquestionId((event.target.value));
    }
    function handelimage(event) {
        setimage((event.target.value));
    }
    let foreignKey={"questionId":questionId}

    let nuwUser = {
        id: Number (id),
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        image: image,
        questions: foreignKey

    }
    useEffect(() => {
        axios.get("api/moeen")
            .then(response => {
                console.log(response.data)
                setMyUser(response.data[0])
            })
        return () => { }
    }, [])
    
    function handleClick() {
        axios({
            method: 'post',
            url: '/api/moeen/add',
            data: nuwUser
        });
    }
  
    return (
        <div>
            <form >
                <div >
                <h1 style = {{color:"red",
                fontSize:"4rem"
                }}>تسجيل مستخدم جديد</h1>
                    <label > الهوية الوطنية</label>
                    <br />
                    <input type="text" onChange={handelid} />
                    <br />

                    <label > اسم المستخدم</label>
                    <br />
                    <input type="text" onChange={handelusername} />
                    <br />

                    <label > كلمة السر</label>
                    <br />
                    <input type="text" onChange={handelpassword} />
                    <br />

                    <label > الاسم الأول</label>
                    <br />
                    <input type="text" onChange={handelfirstname} />
                    <br />

                    <label > الاسم الأخير</label>
                    <br />
                    <input type="text" onChange={handellastname} />
                    <br />

                    <label > الإيميل</label>
                    <br />
                    <input type="text" onChange={handelemail} />
                    <br /> 
                </div>
                <button class="button" onClick={handleClick} variant="danger">سجل الان </button>
                <br /> 
                <br /> 
            </form>
            <br />
        </div>
    )
}