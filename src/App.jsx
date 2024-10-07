import { Contacto } from './sections/contacto'
import { Header } from './sections/header'
import { Hero } from './sections/Hero'
import { Portfolio } from './sections/portfolio'
import { Services } from './sections/services'
function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col w-full items-center'>
        <Hero />
        <Portfolio />
        <Services />
        <Contacto />
      </main>
    </>
  )
}
export default App
