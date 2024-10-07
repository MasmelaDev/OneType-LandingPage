import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedHamburgerButton } from './animated-burger-button'
export const Navbar = () => {
  const [showNavMobile, setShowNavMobile] = useState(false)
  return (
    <>
      <AnimatedHamburgerButton
        onClick={() => {
          setShowNavMobile(!showNavMobile)
        }}
      />
      <nav className='flex px-1 md:px-10 items-center justify-center md:justify-between z-[1500] relative w-full bottomDegrade py-4'>
        <img className='w-28 md:w-32 p-1' src='/OneTypeWhite.png' alt='Logo' />

        {/* <button onClick={() => setShowNavMobile(!showNavMobile)} className='md:hidden ml-auto p-2 rounded-full  '>
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
        </svg>
      </button> */}

        <ul className=' font-medium gap-2 rounded-full hidden md:flex'>
          <li className='p-2'>
            <a className='underline-hover hover:drop-shadow-[0px_0px_5px_#e12a35a2]' href='#portafolio'>
              Portafolio
            </a>
          </li>
          <li className='p-2'>
            <a className='underline-hover hover:drop-shadow-[0px_0px_5px_#e12a35a2]' href='#servicios'>
              Servicios
            </a>
          </li>
          <li className='p-2'>
            <a className='underline-hover hover:drop-shadow-[0px_0px_5px_#e12a35a2]' href='#FAQs'>
              FAQs
            </a>
          </li>
          <li className='p-2'>
            <a className='underline-hover hover:drop-shadow-[0px_0px_5px_#e12a35a2]' href='#contacto'>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        {showNavMobile ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.4, duration: 0.3 } }}
            className='bg-black/40 w-screen h-screen fixed top-0 left-0 z-[1600] md:hidden'
          >
            <motion.ul
              initial={{ x: 800 }}
              animate={{ x: 0 }}
              exit={{ x: 800, transition: { delay: 0, duration: 0.3 } }}
              transition={{ duration: 0.4, delay: 0.3, type: 'keyframes' }}
              className='bg-black h-full relative z-[1700] flex flex-col gap-10 pt-16 px-8 items-center'
            >
              <li className='p-1 px-2 flex items-center border-b-2 border-OneTypeRed border-opacity-50 w-full justify-center '>
                <div className='flex items-center w-[170px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path
                      fillRule='evenodd'
                      d='M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z'
                      clipRule='evenodd'
                    />
                  </svg>

                  <a className='uppercase px-3 p-2 hover:drop-shadow-[0px_0px_5px_#e12a35a2]' href='#portafolio'>
                    Portafolio
                  </a>
                </div>
              </li>
              <li className='p-1 px-2 flex items-center border-b-2 border-OneTypeRed border-opacity-50 w-full justify-center'>
                <div className='flex items-center w-[170px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path
                      fillRule='evenodd'
                      d='M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <a className='uppercase px-3 p-2 hover:drop-shadow-[0px_0px_5px_#e12a35a2]' href='#servicios'>
                    Servicios
                  </a>
                </div>
              </li>
              <li className='p-1 px-2 flex items-center border-b-2 border-OneTypeRed border-opacity-50 w-full justify-center'>
                <div className='flex items-center w-[170px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path
                      fillRule='evenodd'
                      d='M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <a className='uppercase px-3 p-2 hover:drop-shadow-[0px_0px_5px_#e12a35a2]' href='#FAQs'>
                    FAQs
                  </a>
                </div>
              </li>
              <li className='p-1 px-2 flex items-center border-b-2 border-OneTypeRed border-opacity-50 w-full justify-center'>
                <div className='flex items-center w-[170px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path
                      fillRule='evenodd'
                      d='M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <a className='uppercase px-3 p-2 hover:drop-shadow-[0px_0px_5px_#e12a35a2]' href='#contacto'>
                    Contacto
                  </a>
                </div>
              </li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
