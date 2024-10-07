import { Input } from '../components/input'

export const Contacto = () => {
  return (
    <section className='flex items-center flex-col w-full'>
    <h3 className='text-2xl underline-hover mb-8 text-center'>Contacto</h3>
    <div className='pt-5 flex flex-col md:flex-row w-full'>
      <form className='flex flex-col pb-10 md:w-1/2 gap-8 px-6' action=''>
        <Input type={'text'} id='' name='' label={'Nombre'} />
        <Input type={'text'} id='' name='' label={'Correo'} />
        <div className='relative z-0 '>
          <textarea
            required
            className='block py-2.5 pl-2 w-full bg-transparent border-0 border-b border-[#181818] appearance-none   focus:outline-none focus:ring-0 focus:border-OneTypeRed peer text-sm'
            placeholder=''
            rows={5}
          />
          <label className='absolute pl-2 text-[#888] duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-OneTypeRed peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'>
            Mensaje
          </label>
        </div>
      </form>
    </div>
  </section>
  )
}
