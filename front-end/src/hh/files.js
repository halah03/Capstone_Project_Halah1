import React, { Component } from 'react'
import axios from 'axios';
import Services from "./services"
import Registrations from "./registrations"
import Register from './register';
export default class Files extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: [],
        };
    }

    componentDidMount() {
        axios
            .get("api/answers")
            .then(result => {
                const answer = result.data
                this.setState({ answer });

            });
    }

    deleteAnswer(answerId) {
        axios.delete(`/api/answers/delete/${answerId}`)
            .then(res => {
                const answer = this.state.answer.filter(item => item.answerId !== answerId);
                this.setState({ answer })

            })
    }
    render() {
        return (<div>
            <h3>جميع الأجابات</h3>

            {this.state.answer.map((item => (
                <div key={item.answerId}>
                    <tr>
                <td  style={{border:"1px  solid black", width:"350px", height:"50px"}} > {item.answerText2}  </td>
                <td  style={{border:"1px  solid black", width:"100px", height:"50px"}} > {item.answerText}  </td>
              </tr>
              
                    <button class="button" onClick={(e) => this.deleteAnswer(item.answerId, e)}>حذف</button>
                    <p>_ _ _ _</p>
                </div>
            )))}
           
        </div>
        
        )
    }
}

