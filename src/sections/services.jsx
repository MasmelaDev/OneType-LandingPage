import { servicios } from '../data/servicios'
import { Card } from '../components/card'

export const Services = () => {
  return (
    <section className='text-white py-12 flex flex-col items-center justify-center'>
        <h3 className='text-2xl underline-hover mb-8 text-center'>Servicios</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4'>
        {servicios.map((service, index) => (
          <Card key={index} icon={service.icon} title={service.name} description={service.description} />
        ))}
      </div>
    </section>
  )
}
