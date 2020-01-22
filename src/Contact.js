import React, { Component } from 'react'
import Axios from 'axios'


export default class Contact extends Component {

    requester = () => {
        Axios.get("/users/login")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
               <button onClick={this.requester} >Abd</button>
            </div>
        )
    }
}
