import React, { useEffect, useState } from 'react'
import axios from "axios"



export default function Services() {

  const [data, setData] = useState([{ answerId: "", answerText: "", answerText2: "" }]);


  useEffect(() => {
    axios
      .get("api/answers")
      .then(result => setData(result.data));
    console.log(data);
  }, []);

  function deletee(answerId, e){
    console.log("in")
    axios.delete(`/api/answers/delete/${answerId}`)
  }
  return (
    <div>
      <h3>Get</h3>

      {data.map(item => {
        return <div key={item.answerId}>
          <h2>{item.answerText}</h2>
          <p>{item.answerText2}</p>
          <button onClick={(e)=> deletee(item.answerId , e)}>Delete</button>
          <p>_ _ _ _</p>
        </div>
      })}
    </div>
  )
}
