import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul className="flex flex-row gap-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </ul>
    </div>
  )
}

export default Nav