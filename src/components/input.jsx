export const Input = ({ rest,label }) => {
  return (
    <div className='relative z-0 '>
      <input
        {...rest}
        required
        className='block py-2.5 pl-2 w-full bg-transparent border-0 border-b border-[#181818] appearance-none   focus:outline-none focus:ring-0 focus:border-OneTypeRed peer text-sm'
        placeholder=' '
      />
      <label className='absolute pl-2 text-[#888]  duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-OneTypeRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'>
      {label}
      </label>
    </div>
    
  )
}
