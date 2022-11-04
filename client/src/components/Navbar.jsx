import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavSlider from './NavSlider';
import Modal from './Modal'
import { ShoppingBag, Menu, X } from 'react-feather'
import NavItems from './NavItems';

const Navbar2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div className='w-full fixed z-50 bg-white'>
        <nav className="relative container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div>
            <Link to='/' className='font-bold text-2xl underline' onClick={() => setNavMobile(false)}>Get'<span className='text-info'>em</span></Link>
          </div>

          <div className="hidden space-x-10 md:flex font-bold">
            <NavItems/>
          </div>
          <div className='ml-40 pr-6 lg:ml-0 lg:pr-0'>
          <label htmlFor="my-modal-3" className="text-black cursor-pointer hover:text-secondary">
              <ShoppingBag/>
            </label>
            <Modal/>
          </div>

          <button
            id="menu-btn"
            className={`block btn btn-square pl-2.5 md:hidden focus:outline-none`}
            onClick={() => setNavMobile(!navMobile)}
          >
            {!navMobile ? <Menu/> : <X/> }
          </button> 

          <div
            className={`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'} ${
              isActive
                ? 'top-[80px] lg:top-[110px]'
                : 'top-[75px] lg:top-[150px]'
            } fixed left-0 z-10 w-full h-full bg-white transition-all duration-300`}
          >
            <NavSlider setNavMobile={setNavMobile}/>
          </div>
        </div>    
        </nav>
    </div>
  )
}

export default Navbar2