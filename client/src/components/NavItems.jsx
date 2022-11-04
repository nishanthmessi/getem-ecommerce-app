import { Link } from "react-router-dom"

const NavItems = ({ setNavMobile }) => {
  return (
    <>
      <Link to='/about' className="p-4 border-b-2 border-sky-400 border-opacity-0 hover:border-opacity-100 hover:text-sky-400 duration-200 cursor-pointer" onClick={() => setNavMobile(false)}>
        About
      </Link>
      <Link to="/contact" className="p-4 border-b-2 border-sky-400 border-opacity-0 hover:border-opacity-100 hover:text-sky-400 duration-200 cursor-pointer" onClick={() => setNavMobile(false)}>
        Contact
      </Link>
    </>
  )
}

export default NavItems