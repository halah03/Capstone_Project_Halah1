import React, { Component } from 'react'
import axios from 'axios';

export default class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ask: [],
        };
    }

    componentDidMount() {
        axios
            .get("api/asks")
            .then(result => {
                const ask = result.data
                this.setState({ ask })

            });
    }

    deleteAsk(questionId) {
        console.log("in")
        axios.delete(`/api/asks/delete/${questionId}`)
            .then(res => {
                const ask = this.state.ask.filter(item => item.questionId !== questionId);
                this.setState({ ask })

            })
    }
    render() {
        return (
        <div>
            <h3>Get</h3>

            {this.state.ask.map((item => (
                <div key={item.questionId}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    {/* <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                    <p>{item.email}</p>
                    <img src={item.image} width={"50px"} height={"50px"}/> */}
                    <button onClick={(e) => this.deleteAsk(item.questionId, e)}>Delete</button>
                    <p>_ _ _ _</p>
                </div>
            )))}
        </div>
        )
    }
}





// import React, { useEffect, useState } from 'react'
// import axios from "axios"



// export default function Services() {

//   const [data, setData] = useState([{ answerId: "", answerText: "", answerText2: "" }]);


//   useEffect(() => {
//     axios
//       .get("api/answers")
//       .then(result => setData(result.data));
//     console.log(data);
//   }, []);

//   function deletee(answerId, e){
//     console.log("in")
//     axios.delete(`/api/answers/delete/${answerId}`)
//   }
//   return (
//     <div>
//       <h3>Get</h3>

//       {data.map(item => {
//         return <div key={item.answerId}>
//           <h2>{item.answerText}</h2>
//           <p>{item.answerText2}</p>
//           <button onClick={(e)=> deletee(item.answerId , e)}>Delete</button>
//           <p>_ _ _ _</p>
//         </div>
//       })}
//     </div>
//   )
// }
