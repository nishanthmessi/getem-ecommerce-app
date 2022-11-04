import NavItems from "./NavItems"

const NavSlider = ({ setNavMobile }) => {
  return (
    <>
      <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
        <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8 font-semibold'>
          <NavItems setNavMobile={setNavMobile}/>
        </ul>
      </nav>
    </> 
  )
}

export default NavSlider