
import React from 'react'

const ProjectCard = (props) => {
   

  return (
   
     <>
          <div className='w-1/2 group h-full relative hover:rounded-[70px] overflow-hidden'>
            <img className='w-full h-full object-cover' src={props.image1} alt="" />
            <div className='absolute transition-all opacity-0 group-hover:opacity-100 top-0 left-0 h-full flex justify-center items-center w-full bg-black/50'>
                <h2 className='upppercase  text-6xl px-4 pt-2 font-[font1] border-3 rounded-full p-2 text-white border-white'>Voir Le Projet</h2>
            </div>
          </div>

          <div className='w-1/2 group h-full relative hover:rounded-[70px] overflow-hidden'>
            <img className='w-full h-full object-cover' src={props.image2} alt="" />
            <div className='absolute transition-all opacity-0 group-hover:opacity-100 top-0 left-0 h-full flex justify-center items-center w-full bg-black/50'>
                <h2 className='upppercase  text-6xl px-4 pt-2 font-[font1] border-3 rounded-full p-2 text-white border-white'>Voir Le Projet</h2>
            </div>
          </div>
     </>
         
       
  )
}

export default ProjectCard