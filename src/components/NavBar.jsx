import { Link, NavLink } from 'react-router-dom'

function NavBar () {
  return(
    <div className="nav">
      <Link to="/" className="nav__containerLogo">
        <img src="./tienda_logo.png" className="nav__logo" alt="" />
      </Link>
      <ul className="nav__menu">
        <li className="nav__item"><NavLink to="/">Home</NavLink></li>
        <li className="nav__item"><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;