import './App.css'
import { Summary, Plan, OrderButton, CancelButton } from './components'
import Image from './assets/illustration-hero.svg'

function App() {

  return <main className='w-72 min-[600px]:w-[22rem] h-[30rem] min-[600px]:h-auto  m-3 rounded-2xl overflow-hidden bg-paleBlue-300'>
    <div className='w-full h-auto overflow-hidden'>
        <img src={Image} className='block h-full object-cover' alt="illustration of a dancing person"/>
    </div>
    <div className='flex flex-col justify-center align-items-center gap-4 min-[600px]:mb-8'>
      <Summary />
      <Plan />
      <OrderButton />
      <CancelButton />
    </div>
  </main>
} ``

export default App
