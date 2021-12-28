import React, { useEffect, useState } from 'react'
import axios from "axios"




export default function Register() {
    // const [myUser, setMyUser] = useState({id: "", username:"", password:"", firstName:"", lastName:"", email:""})


    const [id, setid] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [image, setimage] = useState("")
    const [questionId, setquestionId] = useState("")

    const [myUser, setMyUser] = useState({ id: "", username: "", password: "", firstName: "", lastName: "", email: "", questionId: "" })


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
    function handelImage(event) {
        setimage((event.target.value));
    }
    let nuwUser = {
        id: id,
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        questionId: questionId,
        image: image
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
            url: 'api/moeen/add',
            data: nuwUser
        });
    }
  
  
    // function handle1(){
    // axios({
    //   method: 'delete',
    //   url: "/api/employee/delete/11"
    // })}
    return (
        <div>
            <form >
                <div >
                    <label >National ID  :</label>
                    <br />
                    <input
                        type="text"
                        placeholder=""
                        name="Id"
                        onChange={handelid} />
                    <br />

                    <label > UserName :</label>
                    <br />
                    <input
                        type="text"
                        placeholder=""
                        name="name"
                        onChange={handelusername} />
                    <br />
                    <label > Password :</label>
                    <br />
                    <input
                        type="text"
                        placeholder=""
                        name="email"
                        onChange={handelpassword} />
                    <br />
                    <label > FirstName :</label>
                    <br />
                    <input
                        type="text"
                        placeholder=""
                        name="Id"
                        onChange={handelfirstname} />
                    <br />
                    <label > LastName :</label>
                    <br />
                    <input
                        type="text"
                        placeholder=""
                        name="Id"
                        onChange={handellastname} />
                    <br />
                    <label > Email :</label>
                    <br />

                    <input
                        type="text"
                        placeholder=""
                        name="password"
                        onChange={handelemail} />
                    <br />
                    <label > Image :</label>
                    <br />

                    <input
                        type="text"
                        placeholder=""
                        name="password"
                        onChange={handelImage} />
                    <br />



                </div>
                <button onClick={handleClick} >Sign Up </button>

            </form>
            {/* <h2>my employee details are:  {JSON.stringify(myEmployee)}</h2>
      <button onClick={handleClick}>Post</button>
      <button onClick={handle1}>delete</button> */}
            <br />
        </div>
    )
}