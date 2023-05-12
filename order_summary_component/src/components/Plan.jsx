import ImageIcon from '../assets/icon-music.svg';

const Plan = () => {
  return (
    <div className="flex justify-around items-center h-[4rem] mx-6 my-2 bg-paleBlue-100/40 rounded-md">
    <div className='flex justify-between'>
      <div className='grid place-items-center'>
        <img className='block w-8 h-auto aspect-square' src={ImageIcon} alt="music icon"/>
      </div>
      <p className='ml-2'> 
        <strong className='block align-top'>Annual Plan</strong>
        <span className='text-xs font-bold block align-bottom text-paleBlue-400'>$59.99/year</span>
      </p>
    </div>
    <div >
      <a className='text-paleBlue-200 text-xs font-bold underline decoration-paleBlue-200 hover:opacity-50 hover:no-underline hover:cursor-pointer'>Change</a>
    </div>
      
    </div>
  )
}

export default Plan;