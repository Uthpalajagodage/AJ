import {Link,NavLink} from 'react-router-dom'

import './Navbar.css'
import Logo from '../Images/logo.png'


const Navbar = () => {
  return (
    <nav>
        <div className="container nav_container">
           
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            nav links
            nav buttons
        </div>
    </nav>
  )
}

export default Navbar