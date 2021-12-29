import React, { Component } from 'react'
import axios from 'axios';
class Registrations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        axios
            .get("/api/moeen")
            .then(result => {
                const users = result.data
                this.setState({ users });

            });
    }
  

    handleUser(id) {
        console.log("in")
        axios.delete(`/api/moeen/delete/${id}`)
            .then(res => {
                const users = this.state.users.filter(item => item.id !== id);
                this.setState({ users })

            })

    }

    render() {
        return (<div>
            <h3>Get</h3>

            {this.state.users.map((item => (
                <div key={item.id}>
                    <p>{item.username}</p>
                    <p>{item.password}</p>
                    <p>{item.lastName}</p>
                    <p>{item.lastName}</p>
                    <p>{item.email}</p>
                    <img src={item.image} width={"50px"} height={"50px"} />
                    <button onClick={(e) => this.handleUser(item.id, e)}>Delete</button>
                    <p>_ _ _ _</p>
                </div>
            )))}
        </div>
        )
    }
}

export default Registrations;