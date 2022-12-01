


import { Link } from 'react-router-dom'
import { getUser } from '../userLocalStorage/userLocalStorage'

import './Header.css'


export default function Header() {


    let user = getUser()

    


    const userNav = (

        <nav className='nav' >
            <li>Welcome, {user} !</li>
            <li><Link className='header-li' to={'/all'}>All Users</Link></li>
            <li><Link className='header-li' to={'/logout'}>Logout</Link></li>
        </nav>
    )

    const guestNav = (
        <nav className='nav' >
            <li><Link className='header-li' to='/login'>Login</Link></li>
            <li><Link className='header-li' to='/register'>Register</Link></li>
        </nav>
    )


    return (
        <header className="header">
            {user !==null ? userNav : guestNav}
        </header>

    )
}