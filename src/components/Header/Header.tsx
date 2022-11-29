


import { Link } from 'react-router-dom'

import './Header.css'


export default function Header() {





    return (
        <header className="header">
            <nav className='nav' >
                <li>Welcome ...user..!</li>
                <li><Link className='header-li' to='/login'>Login</Link></li>
                <li><Link className='header-li' to='/register'>Register</Link></li>
                <li>Logout</li>
            </nav>
        </header>
    )
}