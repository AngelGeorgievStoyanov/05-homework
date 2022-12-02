import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../services/authServices'
import { loginUser } from "../userLocalStorage/userLocalStorage";

import './Register.css'




export default function Register() {

    const navigate = useNavigate()

    const registerSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        const timeCreated = new Date().toJSON().split('.')[0];
        let timeData = timeCreated.split('T')[0];
        const timeH = timeCreated.split('T')[1];
        timeData = timeData.split('-').reverse().join('-');
        const currentDataCreated = timeH + ' / ' + timeData;

        let form = Object.fromEntries(new FormData(event.target as HTMLFormElement))

        form.timeCreated = currentDataCreated
        if (form.username === '' || form.firstName === '' || form.lastName === '' || form.password === '' || form.rePass === '') {
            throw new Error('Username is required, First Name is required, Last Name is required, Password is required, Confirm Password is required')
        }
        if (form.password !== '' && form.rePass !== '') {
            if (form.password !== form.rePass) {
                throw new Error('Password and Confirm Password don\'t match')
            }
        }

        const response = await authService.register(form)

        if (response.id) {
            loginUser(response.id, { username: response.username, id: response.id, firstName: response.firstName })
            navigate('/')
        }

    }


    return (
        <section className='section-form-regiser'>
            <h3>Register Form</h3>
            <form method="POST" onSubmit={registerSubmitHandler} className='form-register'>
                <span className='span-register'>
                    <label htmlFor="firstName">First Name : </label>
                    <input type="text" name='firstName' />
                </span>

                <span className='span-register'>
                    <label htmlFor="lastName">Last Name : </label>
                    <input type="text" name='lastName' />
                </span>

                <span className='span-register'>
                    <label htmlFor="username">Username : </label>
                    <input type="text" name='username' />
                </span>

                <span className='span-register'>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' />
                </span>

                <span className='span-register'>
                    <label htmlFor="rePass">Confirm Password : </label>
                    <input type="password" name='rePass' />
                </span>

                <span className='span-register'>
                    <label htmlFor="gender">Gender : </label>
                    <select name='gender'  >
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                    </select>
                </span>

                <span className='span-register'>
                    <label htmlFor="select-role">Role : </label>
                    <select name='role'  >
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                </span>

                <span className='span-register'>
                    <label htmlFor="imageUrl">Image URL : </label>
                    <input type="text" name='imageUrl' />
                </span>

                <span className='span-register'>
                    <label htmlFor="description">Description : </label>
                    <textarea name="description" cols={20} rows={4}></textarea>
                </span>
                <div className="buttons-register">
                    <input className='button-register' type="submit" value={'Sign Up'} />
                    <small className="text-muted"><Link className="link-register" to="/login">Already Have An Account?</Link></small>
                </div>
            </form>

        </section>
    )
}