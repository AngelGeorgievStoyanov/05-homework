import { Link } from "react-router-dom";

import './Register.css'

export default function Register() {


    return (
        <section className='section-form-regiser'>
            <h3>Register Form</h3>
            <form action="" className='form-register'>
                <span className='span-register'>
                    <label htmlFor="firstName">First Name : </label>
                    <input type="text" name='firsName' />
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
                    <select name='select-gender'  >
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                    </select>
                </span>

                <span className='span-register'>
                    <label htmlFor="select-role">Role : </label>
                    <select name='select-role'  >
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
                    <small className="text-muted"><Link to="/login">Already Have An Account?</Link></small>
                </div>
            </form>

        </section>
    )
}