import React, { Component } from "react";
import { User, UserGender, UserRegister, UserRole } from "../model/users";
import { Optional, UserListener } from "../shared/common-types";
import { toIsoDate } from "../shared/utils";

import './Register.css'

interface UserProps {
    user: Optional<User>
    onRegister: UserListener;
    onTogle: React.MouseEventHandler<HTMLButtonElement>
    mainHid: any
 
    
}

interface UserRegisterState {

    firstName: string;
    lastName: string;
    username: string;
    password: string;
    rePass: string;
    gender: string;
    role: string;
    imageUrl?: string;
    description?: string;
    timeCreated: string;
    timeEdited?: string;
}


export default class Register extends Component<UserProps, UserRegisterState> {

    state: Readonly<UserRegisterState> = {
        firstName: this.props.user?.firstName || '',
        lastName: this.props.user?.lastName || '',
        username: this.props.user?.username || '',
        password: this.props.user?.password || '',
        rePass: this.props.user?.rePass || '',
        gender: this.props.user?.gender.toString() || '1',
        role: this.props.user?.role.toString() || '1',
        imageUrl: this.props.user?.imageUrl || '',
        description: this.props.user?.description || '',
        timeCreated: this.props.user?.timeCreated || ''
    };


    registerSubmitHandler = (event: React.FormEvent | Event) => {
        event.preventDefault()
  

            if (this.state.firstName === '') {
                throw new Error('First Name is required')
            }
            if (this.state.lastName === '') {
                throw new Error('Last Name is required')
            }
            if (this.state.username === '') {
                throw new Error('Username is required')
            }
            if (this.state.password === '') {
                throw new Error('Password is required')
            }
            if (this.state.rePass === '') {
                throw new Error('Confirm Password is required')
            }

            if (this.state.password !== this.state.rePass) {
                throw new Error('Password and Confirm Password don\'t match')
            }


            this.props.mainHid(event)

            this.props.onRegister(
                this.props.user?.id ?
                    new User(
                        this.props.user.id,
                        this.state.firstName,
                        this.state.lastName,
                        this.state.username,
                        this.state.password,
                        this.state.rePass,
                        parseInt(this.state.gender),
                        parseInt(this.state.role),
                        this.state.imageUrl,
                        this.state.description,
                        toIsoDate(new Date())
                    ) :
                    new UserRegister(
                        this.state.firstName,
                        this.state.lastName,
                        this.state.username,
                        this.state.password,
                        this.state.rePass,
                        parseInt(this.state.gender),
                        parseInt(this.state.role),
                        this.state.imageUrl,
                        this.state.description,
                        toIsoDate(new Date())
                    )

            )

    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const fieldName = event.target.name;
        this.setState({ [fieldName]: event.target.value } as unknown as UserRegisterState);
    }

    render() {

        return (
            <section className='section-form-regiser'>
                <div className="register-div">
                    {this.props.user ? <h3>Edit Form</h3> : <h3>Register Form</h3>}
                </div>
                <form method="POST" onSubmit={this.registerSubmitHandler} className='form-register'>
                    <span className='span-register'>
                        <label htmlFor="firstName">First Name : </label>
                        <input type="text" name='firstName' minLength={2} maxLength={15} value={this.state.firstName} onChange={this.handleChange} />
                    </span>

                    <span className='span-register'>
                        <label htmlFor="lastName">Last Name : </label>
                        <input type="text" name='lastName' minLength={2} maxLength={15} value={this.state.lastName} onChange={this.handleChange} />
                    </span>

                    <span className='span-register'>
                        <label htmlFor="username">Username : </label>
                        <input type="text" name='username' minLength={5} maxLength={15} value={this.state.username} onChange={this.handleChange} />
                    </span>

                    <span className='span-register'>
                        <label htmlFor="password">Password : </label>
                        <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                    </span>

                    <span className='span-register'>
                        <label htmlFor="rePass">Confirm Password : </label>
                        <input type="password" name='rePass' value={this.state.rePass} onChange={this.handleChange} />
                    </span>

                    <span className='span-register'>
                        <label htmlFor="gender">Gender : </label>
                        <select name='gender' value={this.state.gender} onChange={this.handleChange} >
                            <option value={UserGender.MALE}>MALE</option>
                            <option value={UserGender.FEMALE}>FEMALE</option>
                        </select>
                    </span>

                    <span className='span-register' >
                        <label htmlFor="select-role">Role : </label>
                        <select name='role' value={this.state.role} onChange={this.handleChange}>
                            <option value={UserRole.USER}>USER</option>
                            <option value={UserRole.ADMIN}>ADMIN</option>
                        </select>
                    </span>

                    <span className='span-register'>
                        <label htmlFor="imageUrl">Image URL : </label>
                        <input type="text" name='imageUrl' value={this.state.imageUrl} onChange={this.handleChange} />
                    </span>

                    <span className='span-register'>
                        <label htmlFor="description">Description : </label>
                        <textarea name="description" cols={20} rows={4} defaultValue={this.state.description} maxLength={512} ></textarea>
                    </span>
                    <div className="buttons-register">
                        {this.props.user ? <input className='button-register' type="submit" value={'EDIT PROFILE'} /> :
                            <input className='button-register' type="submit" value={'Sign Up'} />
                        }
                        <button className='button-go-to-login' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.props.onTogle(e)} >Already Have An Account?</button>
                    </div>
                </form>

            </section>
        )
    }
}