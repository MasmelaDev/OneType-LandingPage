import { useState } from 'react'
import { MotionConfig, motion } from 'framer-motion'
const variantsBurger = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['35%', '50%', '50%'],
      left: '50%',
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '35%'],
      left: 'calc(50% + 5px)',
    },
  },
}
export const AnimatedHamburgerButton = ({onClick}) => {
  const [active, setActive] = useState(false)
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={() => {
          setActive(pv => !pv)
          onClick()
        }}
        className={` h-10 w-10 rounded-full bg-white/0 transition-colors md:hidden  right-3 z-[1800] top-4 ${active ? 'fixed' : 'absolute'}`}
      >
        <motion.span
          variants={variantsBurger.top}
          className='absolute h-[2px] w-5 bg-white'
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
        />
        <motion.span
          variants={variantsBurger.middle}
          className='absolute h-[2px] w-5 bg-white'
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        <motion.span
          variants={variantsBurger.bottom}
          className='absolute h-[2px] w-2.5 bg-white'
          style={{
            x: '-50%',
            y: '50%',
            bottom: '35%',
            left: 'calc(50% + 5px)',
          }}
        />
      </motion.button>
    </MotionConfig>
  )
}
