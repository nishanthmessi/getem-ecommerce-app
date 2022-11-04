import { GitHub, Globe  } from 'react-feather'
import MyBitmoji from '../img/bitmoji.png'

const About = () => {
  return (
    <>
    <section className="bg-white">
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl mt-20">Hello There!</h1>
      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
        This Ecommerce application is developed with React, Tailwindcss, Express and Stripe. The products included in the application are actually available in 
        <span>
          <a className='font-bold hover:text-black' href="https://mkbhd.com" target='_blank' rel="noreferrer"> mkbhd.com</a>
        </span>
      </p>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img className="object-cover w-full rounded-xl aspect-square" src={MyBitmoji} alt="profile_img"/>
          <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Nisanth</h1>
          <p className="mt-2 text-gray-500 capitalize">Full Stack Developer</p>
          <div className="flex mt-3 -mx-2">
            <a href="https://github.com/nishanthmessi" target='_blank' className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" rel="noreferrer">
              <GitHub/>
            </a>

            <a href="https://nisanthmessi.netlify.app/" target='_blank' className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" rel="noreferrer">
              <Globe/>
            </a>
          </div>
        </div>
      </div>
      </div>
      </section>
    </>
  )
}

export default About