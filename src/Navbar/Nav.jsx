import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul className="flex gap-10 justify-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Paste">Paste</NavLink>
        </ul>
    </div>
  )
}

export default Nav