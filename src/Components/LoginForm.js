import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'

class LoginForm extends Component {
    state= {
        data: {
            email: "",
            password:""
        },
        loading: false,
        errors:{},
    }

    onChange = e => this.setState({data:{...this.state.data}, [e.target.name]: e.target.value})

    render() {
        const{data} = this.state
        return (
            <div>
            <Form>
                <Form.Field>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="email@email.com" value= {data.email} onChange={this.onChange}/>
                </Form.Field>
                <Form.Field>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="8 characters"/>
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        </div>
        )
    }
}

export default LoginForm
