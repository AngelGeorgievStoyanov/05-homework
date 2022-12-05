import React from 'react'
import { UserListenerLogin } from '../shared/common-types'

import './Login.css'




type LoginProps = {
  
    onLogin: UserListenerLogin
    onTogle: React.MouseEventHandler<HTMLButtonElement>
   
}


function Login({ onLogin, onTogle, }: LoginProps) {


    const loginSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        let form = Object.fromEntries(new FormData(event.target as HTMLFormElement))
        const username = form.username as string
        const password = form.password as any as string

        onLogin(username, password)
        
      


    }

    return (
        <section className='section-form-login'>
            <h3 className='login-h3'>Login Form</h3>
            <form method='POST' className='form-login' onSubmit={loginSubmitHandler}>

                <span className='span-login'>
                    <label htmlFor="username">Username : </label>
                    <input type="text" name='username' id='username' minLength={5} maxLength={15} />
                </span>
                <span className='span-login'>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' id='password' />
                </span>
                <input className='button-login' type="submit" value={'Login'} />

                <button className='button-go-to-register' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onTogle(e)} >Don't Have An Account? Sign up!</button>

            </form>

        </section>

    )

}

export default Login