import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {
  const projects=[{
    image1:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
    image2:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
  },{
    image1:'https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8753216d2',
    image2:'https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a',
  },{
    image1:'https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5',
    image2:'https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5',
  },{
     image1:'https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5',
    image2:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
  }]
   
  gsap.registerPlugin(ScrollTrigger)
   useGSAP(function(){
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
   })
    

  return (
    <div className='text-black lg:p-4 p-2'>
      <div className=" pt-[45vh]  ">
        <h1 className='font-[font2] lg:text-[9vw] text-7xl uppercase'>Projets</h1>
      </div>
      
      <div className='lol lg:mt-10'>
      {projects.map(function(elem,index){
        return  <div key={index} className='hero w-full lg:h-[800px] mb-4 flex lg:gap-4 gap-2 -mt-12 '>
          <ProjectCard image1={elem.image1} image2={elem.image2}/>
         </div>
      })}
      
      </div>
      </div>
  )
}

export default Projects