import { Link } from 'react-router-dom'
import './Login.css'


export default function Login() {


    return (
       <section className='section-form-login'>
            <h3>Login Form</h3>
           <form action="" className='form-login'>
            <span className='span-login'>                
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name='firsName'  />
            </span>
            <span className='span-login'>
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name='lastName' />
            </span>
            <span className='span-login'>
            <label htmlFor="username">Username : </label>
            <input type="text" name='username' />
            </span>
            <span className='span-login'>
            <label htmlFor="password">Password : </label>
            <input type="password" name='password'  />
            </span>
            <input className='button-login' type="submit" value={'Login'} />   
            <small className="text-muted"><Link className='link-register' to="/register">Don't Have An Account? Sign up!</Link></small>         
           </form>

       </section>
       
    )
}