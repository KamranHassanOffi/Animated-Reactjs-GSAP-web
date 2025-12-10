import React, { useContext } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'
import  { Navbarcontext } from '../context/Navcontext'


const FullScreenNav = () => {

    const [navopen,Setnavopen]= useContext(Navbarcontext)
      const FullScreenRef=useRef(null)
       
       
        
    useGSAP(
    () => {
      if (navopen) {
        // OPEN ANIMATION
        gsap.set(FullScreenRef.current, {
          opacity: 1,
          pointerEvents: "auto",
          display: "block",
        });

        const tl = gsap.timeline();

        tl.from(".stairing", {
          height: 0,
          stagger: 0.15,
          duration: 0.6,
          
        });

        tl.from(".link",
          {
            opacity: 0,
            rotateX: 90,
            stagger: 0.2,
          },
          "-=0.3"
        );
      } else {
        // CLOSE ANIMATION
        gsap.to(FullScreenRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.5,
          onComplete: () => {
            gsap.set(FullScreenRef.current, { display: "none" });
          },
        });
      }
    },[navopen]
    
  );


    return (
        <div ref={FullScreenRef} className=' hidden h-screen w-full overflow-hidden absolute bg-black text-center z-50 '>
            <div className='h-screen w-full fixed'>
                
                <div className='h-screen w-full flex fixed z-20 top-0 '>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h- full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div className='relative p-5'>
                <div className='navlink flex w-full justify-between items-start pt-4 '>
                    <div className='w-33'>
                        <svg  className='w-full' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                            <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div onClick={()=>{
                        Setnavopen(false)
                    }} className='w-32 h-32 relative cursor-pointer'>
                        <div className='h-44 w-0.5 bg-[#D3FD50] -rotate-45 origin-top absolute'></div>
                        <div className='h-44 w-0.5 bg-[#D3FD50] right-0 rotate-45 origin-top absolute'></div>
                    </div>
                </div>
                <div className='py-15 '>
                    <div className='link origin-top border-t border-white relative cursor-pointer '>
                        <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Projects</h1>
                        <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                            <div className='movex flex items-center ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour tout voir</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0 ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour tout voir</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />

                            </div>

                            <div className='movex flex items-center ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour Tout Savoir</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0 ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour Tout Savoir</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />

                            </div>

                        </div>
                    </div>
                    <div className='link origin-top border-t border-white relative cursor-pointer '>
                        <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Agence</h1>
                        <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                            <div className='movex flex items-center ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0 ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour envoyer un fax </h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />

                            </div>

                            <div className='movex flex items-center ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0 ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />

                            </div>

                        </div>
                    </div>
                    <div className='link origin-top border-t border-white relative cursor-pointer '>
                        <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Contact</h1>
                        <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                            <div className='movex flex items-center ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0 ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />

                            </div>

                            <div className='movex flex items-center ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0 ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />

                            </div>

                        </div>
                    </div>
                    <div className='link origin-top border-y border-white relative cursor-pointer '>
                        <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Blogue</h1>
                        <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                            <div className='movex flex items-center ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Lire les articles</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0 ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Lire les articles</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />

                            </div>

                            <div className='movex flex items-center ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Lire les articles</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0 ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-10 uppercase'>Lire les articles</h2>
                                <img className='h-36 w-96 object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FullScreenNav
