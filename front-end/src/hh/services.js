import React, { useEffect, useState } from 'react'
import axios from "axios"



export default function Sevvices() {

    const [data, setData] = useState([{ answerId: "", answerText: "", answerText2: "" }]);


    useEffect(() => {
        // debugger;  
        axios
            .get("api/answers")
            .then(result => setData(result.data));
        console.log(data);
        // debugger;  
    }, []);

    return (
        <div>
            <h1> List  Of   Lawyers : </h1>
            <h1>Soon</h1>
            <hr />
            {data.map(item => {
                return <div key={item.answerId}>
                    <h2>{item.answerText}</h2>
                    <p>{item.answerText2}</p>
                    <hr/>
                </div>
            })}
        </div>
    )
}
