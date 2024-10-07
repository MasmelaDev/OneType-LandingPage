export const Card = ({ title, description, icon }) => {
  return (
    <div className='relative min-w-80 h-[440px] bg-black/30 rounded-xl transition-shadow  duration-500'>
      <div className='absolute custom-shadow-card group top-5 left-5 bottom-5 right-5 rounded-xl flex items-center justify-center overflow-hidden duration-500 hover:-translate-y-12 before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-white/5 bg-[#0C0C0C] '>
        <div className='text-center p-5  flex flex-col gap-3'>
          <div className='top-3 right-7 absolute w-20 h-20 grid place-content-center'>
            {icon}
          </div>
          <h3 className='z-20 text-2xl font-semibold pt-8 uppercase'>{title}</h3>
          <p className="text-sm mb-8 text-white/70">{description}</p>
          <a className="bg-OneTypeRed font-medium rounded-lg py-1.5 px-2 group relative justify-center flex items-center gap-1 " href='#'>Más Info <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 group-hover:animate-move-right transition duration-300 ease-in-out'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
          </svg></a>
        </div>
      </div>
    </div>
  )
}
