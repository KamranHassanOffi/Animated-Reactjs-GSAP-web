import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'

const Stairs = (props) => {
    const currentpath = useLocation()
      const stairparent=useRef(null)
      const PageRef= useRef(null)
  useGSAP(function(){
    const tl=gsap.timeline()
    tl.to(stairparent.current,{
      display:'block'
    })
    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.25
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
    tl.to(stairparent.current,{
      display:'none'
    })
     tl.to('.stair',{
      y:'0%',
    })

    gsap.from(PageRef.current,{
        opacity:0,
        delay:1.2
    })
  },[currentpath])

  return (
    <div>
       <div ref={stairparent}>
          <div  className='h-screen w-full flex fixed z-20 top-0 '>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      </div>

      </div>
      <div ref={PageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Stairs
