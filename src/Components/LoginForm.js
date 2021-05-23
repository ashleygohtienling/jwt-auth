import React, {useState } from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'



function LoginForm ({Login, error}){
    const [details, setDetails] = useState({name: "", email:"", password:""})

    const submitHandler = e =>{

        e.preventDefault();
        Login(details);
    }

        return (
            <div>
                 <h1> Login Page </h1>
            <Form onSubmit = {submitHandler} >
                <Form.Field>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="name" onChange={e => setDetails({...details, name:e.target.value})} value = {details.name}/>            
                </Form.Field>
                <Form.Field>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="email@email.com" onChange={e => setDetails({...details, email:e.target.value})} value = {details.email}
                error = {{
                    content: 'Please input a valid email address',
                    pointing: 'Below',}}/>            
                </Form.Field>   
                <Form.Field >
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="8 characters" onChange={e => setDetails({...details, password:e.target.value})} value = {details.password}/>
                </Form.Field>
                <Form.Field>
                <Checkbox label= "I agree to the terms and conditions"/>
                </Form.Field>
                <Button primary>Login</Button>
                <Button secondary>Forget Password</Button>
            </Form>
        </div>
        )
    };


export default LoginForm;
