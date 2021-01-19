import axios from 'axios'
import React, { Component } from 'react'
import { Espace_client } from './Espace_client'
import UserProfile from './UserProfile';


export class Login extends Component {
    state={
        user: {},
        token: ''
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        if(localStorage.token) {
            axios.get(`users/${sessionStorage.id}`).then(response => {
                console.log(response.data)
                this.setState({
                    user: response.data.client
                })

                this.setState({
                    token: response.data.token
                })
            })
        }
    }
    render() {
        let client;
        
        if(localStorage.token === this.state.token){
            client = <UserProfile/>
        }else{
            client = <Espace_client/>
        }
        return (
            <>
                {client}
            </>
        )
    }
}

export default Login;
