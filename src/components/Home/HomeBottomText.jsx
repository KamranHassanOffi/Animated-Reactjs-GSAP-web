import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] fixed bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 z-20">

      <div className="border-[3px] px-12 py-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase leading-none flex items-center">
        <Link
          className="text-[3.5vw] outline-none focus:outline-none focus:ring-0"
          to="/projects"
        >
          Projets
        </Link>
      </div>

      <div className="border-[3px] px-12 py-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase leading-none flex items-center">
        <Link className="text-[3.5vw]" to="/agence">Agence</Link>
      </div>

    </div>
  )
}

export default HomeBottomText
