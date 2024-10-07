import { Brands } from '../components/brands'

export const Portfolio = () => {
  return (
    <section className='flex justify-center py-5 flex-col items-center mb-20 w-full'>
    <h3 className='text-2xl  underline-hover mb-8 text-center'>Marcas que confian en nosotros</h3>
    <Brands />
  </section>
  )
}
