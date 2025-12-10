import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imagesArray = [
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3'
  ];

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: imageDivRef.current,
      start: "top 35%",
      end: "top -80%",
      pin: true,
      pinSpacing: true,
      scrub: true,  // smooth scrolling but no laggy delay
      onUpdate: (self) => {
        const index = Math.min(
          imagesArray.length - 1,
          Math.floor(self.progress * imagesArray.length)
        )
        imageRef.current.src = imagesArray[index]
      }
    });
  });

  return (
    <div>
      <div className="section1">
        
        {/* IMAGE CARD */}
        <div 
          ref={imageDivRef} 
          className="overflow-hidden w-[15vw] h-[20vw] rounded-4xl absolute top-96 left-[30vw]"
        >
          <img 
            ref={imageRef} 
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt="team"
          />
        </div>

       
        <div className="relative text-black font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] uppercase leading-[18vw] text-center">
              Soixan7e <br /> Douze
            </h1>
          </div>

          <div className="pl-[40%] mt-20">
            <p className="text-6xl">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              Notre curiosité nourrit notre créativité. On reste humbles et on dit 
              non aux gros egos, même le vôtre. Une marque est vivante. Elle a des 
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire 
              de bons chiffres à court terme, mais on la tue à long terme. C’est pour 
              ça qu’on s’engage à donner de la perspective, pour bâtir des marques 
              influentes.
            </p>
          </div>
        </div>
      </div>


      {/* SECTION 2 */}
      <div className="section2 text-black font-[font2] w-full px-20 py-40">

        <div className="grid grid-cols-3 gap-10 mb-40">
          <div className="flex items-start">
            <h2 className="text-2xl font-semibold">Expertise</h2>
          </div>

          <ul className="text-xl leading-relaxed space-y-2">
            <li>Stratégie</li>
            <li>Publicité</li>
            <li>Branding</li>
            <li>Design</li>
            <li>Contenu</li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-14 text-xl leading-relaxed">
          <p>
            Nos projets_ naissent dans l’humilité, grandissent dans la curiosité 
            et vivent grâce à la créativité sous toutes ses formes.
          </p>
          <p>
            Notre création_ bouillonne dans un environnement où le talent a le goût 
            d’exploser. Où on se sent libre d’être la meilleure version de soi-même.
          </p>
          <p>
            Notre culture_ c’est l’ouverture aux autres. Tout l’équipage participe 
            à bâtir une agence dont on est fiers.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Agence
