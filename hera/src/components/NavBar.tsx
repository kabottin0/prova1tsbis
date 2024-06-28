import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
      <nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/user"> Profile</NavLink>
        <NavLink to="/login"> Login</NavLink>


      </nav>

    </>
  )
}


export default NavBar
