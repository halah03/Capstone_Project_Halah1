import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../index.css"


export default function Answers() {
  const [answerId, setanswerId] = useState("")
  const [answerText, setanswerText] = useState("")
  const [answerText2, setanswerText2] = useState("")


  const [myAnswers, setMyAnswers] = useState([{ answerId: "", answerText: "",answerText2:"" }]);

  function handelid(event) {
    setanswerId((event.target.value));
  }
  function handeltitle(event) {
    setanswerText((event.target.value));
  }
  function handelcontent(event) {
    setanswerText2((event.target.value));
  }
  let nuwUser = {
    answerId: answerId,
    answerText: answerText,
    answerText2: answerText2,
}
useEffect(() => {
    axios.get("api/answers")
        .then(response => {
            console.log(response.data)
            setMyAnswers(response.data[0])
        })
    return () => { }
}, [])
function handleClick2(event) {
  event.preventDefault();
    axios({
        method: 'post',
        url: 'api/answers/add',
        data: nuwUser
    });
}
  function handle1(){
    axios({
      method: 'delete',
      url: "/api/answers/delete/1"
    })}

  return (
      <div>

<h1 style = {{color:"red",
                fontSize:"3rem"
                }}> الإجابة على الاسئلة</h1>
          <label > رقم الإجابة</label>
        <br /> <input type="text" placeholder="" name="Id" onChange={handelid} />
        <br />
        <label >العنوان</label>
        <br />
        <input type="text" placeholder="" name="name" onChange={handeltitle} />
        <br />
        <label >المحتوى</label>
        <br />       
<textarea placeholder="description " onChange={handelcontent}
    style={{ width: "50%", height: "120px", marginTop: "5px" }}
></textarea>
<br />
<br />
<button class="button" onClick={handleClick2}>اجابة</button>
    </div>
  )

}

