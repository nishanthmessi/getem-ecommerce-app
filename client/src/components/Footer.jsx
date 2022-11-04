import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className="my-14 font-semibold text-sm lg:text-md">
      <ul className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <Link to='/contact' className='cursor-pointer'>Contact</Link>
        <li className='cursor-pointer'>Privacy Policy</li>
        <li className='cursor-pointer'>Returns & FAQ</li>
        <li className='cursor-pointer'>Terms of Service</li>
      </ul>
      <ul className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-8">
        <li>&copy; NM</li>
        <li>created with ❤️</li>
      </ul>
    </div>
    </>
  )
}

export default Footer