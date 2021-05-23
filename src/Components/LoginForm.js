import React, {useState } from 'react'
import {Form, Button} from 'semantic-ui-react'



function LoginForm ({Login, error}){
    const [details, setDetails] = useState({name: "", email:""})

    const submitHandler = e =>{

        e.preventDefault();
        Login(details);
    }

        return (
            <div>
                 <h1> Login Page </h1>
            <Form onSubmit = {submitHandler} >
                <Form.Field>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="email@email.com"/>            
                </Form.Field>           
                <Form.Field >
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="8 characters"/>
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        </div>
        )
    };


export default LoginForm;
