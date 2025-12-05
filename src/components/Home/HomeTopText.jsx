import React from 'react'
import Video from './Video'

const HomeTopText = () => {
  return (
    <div  className='font-[font1] pt-5 text-center'>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>L'étincelle</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-start'>qui<div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-3'><Video/></div>génère</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>la créativité</div>
    </div>
  )
}

export default HomeTopText