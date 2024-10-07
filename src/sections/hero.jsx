export const Hero = () => {
  return (
    <section className='p-1 relative flex items-center justify-between mb-20 pb-20 pt-10 flex-col md:flex-row'>
    <div className='w-full h-[450px] flex justify-center items-start flex-col'>
      <h1 className='font-bold text-3xl sm:text-4xl text-center uppercase mb-5 max-w-lg px-2'>
        <span className='drop-shadow-[0px_0px_5px_#e12a35a2]'>Transforma tu negocio con</span>
        <span className='text-OneTypeRed px-1.5'>videos</span>
        <span className='drop-shadow-[0px_0px_5px_#e12a35a2]'>que generan visitas y</span>
        <span className='text-OneTypeRed px-1.5 '>ventas.</span>
      </h1>
      <p className='max-w-lg mb-5 text-center text-sm sm:text-base px-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quos nostrum minus sit velit
        repellendus?
      </p>
      <label className='flex gap-2 w-full max-w-lg flex-wrap text-sm sm:text-base justify-center relative items-center '>
        <input
          type='text'
          disabled
          className='bg-[#181818] w-42 py-2 px-3 rounded-md '
          value='OneType@gmail.com'
        />
        <button className='bg-OneTypeRed text-white px-3 py-2 transition-all duration-300 group relative flex items-center gap-1 rounded-md'>
          Contactanos
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 group-hover:animate-move-right transition duration-300 ease-in-out'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
          </svg>
        </button>
      </label>
    </div>
    {/* <div className='w-[45%] h-[450px] flex justify-end items-center'>
      <img className='w-96 drop-shadow-[0px_0px_5px_#e12a35a2]' src='/New1tp3.png' alt='OneTypeWhite' />
    </div> */}
    </section>
  )
}
