import { clientes } from '../data/clientes'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const variants = {
  hidden: direction => ({
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
    opacity: 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1,type:'spring' , delay: 0.4 },
  },
}

export const Brands = () => {
  const [selectedClient, setSelectedClient] = useState(clientes[0])
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <div className='flex w-full md:flex-row flex-col justify-center gap-4'>
      <div className='hidden col-span-2 row-span-2'></div>
      <div className='flex md:flex-col gap-3 max-h-[650px] overflow-x-auto md:overflow-x-hidden overflow-y-auto items-start justify-start  scrollbar-track-transparent scrollbar-thumb-OneTypeRed/50 px-5 py-2 pb-4 scrollbar-thin scrollbar-thumb-rounded-lg '>
        {clientes.map((cliente, index) => (
          <article
            className={`w-28 h-28 md:w-40 md:h-40 hover:scale-105 flex-shrink-0 p-3 shadow-md border border-white/5  rounded-full ${selectedClient.name === cliente.name ? 'drop-shadow-[0px_0px_5px_#e12a35a2] scale-105' : ''} transition-all duration-300`}
            key={index}
          >
            <img
              src={`/${cliente.name}.png`}
              onClick={() => setSelectedClient(cliente)}
              className={`object-contain h-full w-full flex justify-center items-center rounded transition-all duration-300 cursor-pointer ${selectedClient.name === cliente.name ? 'drop-shadow-[0px_0px_5px_#e12a35a2]' : ''}`}
            />
          </article>
        ))}
      </div>

      <div
        className={`grid relative auto-rows-[202px] grid-cols-2 gap-3 h-[650px] scrollbar-track-transparent scrollbar-thumb-OneTypeRed/50 p-4 max-w-screen-lg w-full  scrollbar-thin scrollbar-thumb-rounded-lg overflow-hidden`}
      >
        <AnimatePresence>
          {selectedClient.projects.map(project => {
            return (
              
              <motion.article
                className={`bg-[#181818] cursor-pointer rounded-md shadow-md flex items-center justify-center row-span-${project.rowSpan} col-span-${project.colSpan}`}
                key={project.id}
                initial='hidden'
                animate='visible'
                custom={project.direction}
                variants={variants}
                exit={{ opacity: 0 }}
                layoutId={project.id}
                onClick={() => setSelectedProject(project)}
                transition={{ opacity: { duration: 0.4 } }}
              >
                <h4 className='text-2xl'>{project.name}</h4>
              </motion.article>
            )
          })}
        </AnimatePresence>
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              key='overlay'
              className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-40 '
              onClick={() => setSelectedProject(null)}
            >
              <div
                key={'project'}
                className=' z-50 w-full h-full '
              >
                <motion.div
                  layoutId={selectedProject.id}
                  className='w-full h-full bg-[#181818] rounded-md flex justify-center items-center '
                >
                  <h4 className='text-2xl'>{selectedProject.name}</h4>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
