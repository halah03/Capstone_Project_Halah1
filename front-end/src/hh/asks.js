import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Button } from 'react-bootstrap';
import "../index.css"


export default function Asks() {
  const [questionId, setquestionId] = useState("")
  const [title, settitle] = useState("")
  const [content, setcontent] = useState("")
  const [answer1, setanswer1] = useState("")
  const [answer2, setanswer2] = useState("")
  const [answer3, setanswer3] = useState("")
  const [email, setemail] = useState("")

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
  function handelemail(event) {
    setemail((event.target.value));
}
  let newAsks = {
    questionId: questionId,
    title: title,
    content: content,
    answer1: answer1,
    answer2: answer2,
    answer3: answer3,
    email: email
  }
  useEffect(() => {
    axios.get("api/asks")
      .then(response => {
        console.log(response.data)
        setMyAsks(response.data[0])
      })
    return () => { }
  }, [])
  function handleClic(event) {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'api/asks/add',
      data: newAsks
    });
  }

  return (
    <div>
     
      <h1 style = {{color:"red",
                fontSize:"3rem"
                }}>اطرح سؤالك</h1>
        <label >رقم السؤال</label>
        <br /> <input type="text" placeholder="" name="Id" onChange={handelid} />
        <br />
        <label > العنوان</label>
        <br />
        <input type="text" placeholder="" name="name" onChange={handeltitle} />
        <br />
        <label > المحتوى</label>
        <br />

<textarea placeholder="description " onChange={handelcontent}
    style={{ width: "50%", height: "120px", marginTop: "5px" }}
></textarea>

<br />
<style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1rem;
      font-size: 1rem;
    }
    `}
  </style>

  <button class="button" onClick={handleClic} variant="flat" size="xxl">
   اسأل
</button>

    </div>
    
  );
}

