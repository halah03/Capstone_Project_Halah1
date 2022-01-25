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
            <h3>جميع الاسئلة</h3>

            {this.state.ask.map((item => (
                <div key={item.questionId}>

                    <tr>
                <td  style={{border:"1px  solid black", width:"350px", height:"50px"}} > {item.content} </td>

                <td  style={{border:"1px  solid black", width:"100px", height:"50px"}} > {item.title} </td>
              </tr>
                
                    <button class="button" onClick={(e) => this.deleteAsk(item.questionId, e)}>حذف</button>
                    <p>_ _ _ _</p>
                </div>
            )))}
        </div>
        )
    }
}

