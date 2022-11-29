import React from 'react'
import { Link } from 'react-router-dom'
import * as authService from '../services/authServices'

import './Login.css'


export default function Login() {


    const loginSubmitHandler = async(event: React.FormEvent) => {
        event.preventDefault();

        let form = Object.fromEntries(new FormData(event.target as HTMLFormElement))

        const username = form.username as string
        const password = form.password as any as string
        console.log(username,password)

        const response = await authService.login(username,password)
        console.log(response)
    }

    return (
        <section className='section-form-login'>
            <h3>Login Form</h3>
            <form method='POST' className='form-login'  onSubmit={loginSubmitHandler}>

                <span className='span-login'>
                    <label htmlFor="username">Username : </label>
                    <input type="text" name='username' />
                </span>
                <span className='span-login'>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' />
                </span>
                <input className='button-login' type="submit" value={'Login'} />
                <small className="text-muted"><Link className='link-register' to="/register">Don't Have An Account? Sign up!</Link></small>
            </form>

        </section>

    )
}