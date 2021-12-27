import React, { useEffect, useState } from 'react'
import axios from "axios"



export default function Asks() {
  const [questionId, setquestionId] = useState("")
  const [title, settitle] = useState("")
  const [content, setcontent] = useState("")
  const [answer1, setanswer1] = useState("")
  const [answer2, setanswer2] = useState("")
  const [answer3, setanswer3] = useState("")

  const [myAsks, setMyAsks] = useState({ questionId: "", title: "", content: "" })

  function handelid(event) {
    setquestionId((event.target.value));
  }
  function handeltitle(event) {
    settitle((event.target.value));
  }
  function handelcontent(event) {
    setcontent((event.target.value));
  }
  function handelAnswer1(event) {
    setanswer1((event.target.value));
  }
  function handelAnswer2(event) {
    setanswer2((event.target.value));
  }
  function handelAnswer3(event) {
    setanswer3((event.target.value));
  }
  let newAsks = {
    questionId: questionId,
    title: title,
    content: content,
    answer1: answer1,
    answer2: answer2,
    answer3: answer3
  }
  useEffect(() => {
    axios.get("api/asks")
      .then(response => {
        console.log(response.data)
        setMyAsks(response.data[0])
      })
    return () => { }
  }, [])
  function handleClic() {
    axios({
      method: 'post',
      url: 'api/asks/add',
      data: newAsks
    });
  }


  

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <label > Id  :</label>
        <br /> <input type="text" placeholder="" name="Id" onChange={handelid} />
        <br />
        <label > Title :</label>
        <br />
        <input type="text" placeholder="" name="name" onChange={handeltitle} />
        <br />
        <label > Content :</label>
        <br />
        <input type="text" placeholder="" name="email" onChange={handelcontent} />
        <br />
        <label > Answer 1 :</label>
        <br />
        <input type="text" placeholder="" name="email" onChange={handelAnswer1} />
        <br />
        <label > Answer 2 :</label>
        <br />
        <input type="text" placeholder="" name="email" onChange={handelAnswer2} />
        <br />
        <label > Answer 3 :</label>
        <br />
        <input type="text" placeholder="" name="email" onChange={handelAnswer3} />
        <br />

        <button onClick={handleClic} >Sign Up </button>
        {/* <button onClick={handleClicc} >Sign Upgg </button> */}

      </nav>
    </div>
    
  );
}

