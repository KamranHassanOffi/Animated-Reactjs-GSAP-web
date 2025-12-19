import React from 'react'
import Video from './Video'

const HomeTopText = () => {
  return (
    <div  className='font-[font1] lg:mt-0 mt-72 pt-5 text-center'>
      <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center'>L'étincelle</div>
      <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-start'>qui<div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-3'><Video/></div>génère</div>
      <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center'>la créativité</div>
    </div>
  )
}

export default HomeTopText