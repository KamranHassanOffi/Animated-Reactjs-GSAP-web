import React from 'react'
import Video from '/src/components/Home/Video.jsx'
import HomeTopText from '/src/components/Home/HomeTopText.jsx'
import HomeBottomText from '/src/components/Home/HomeBottomText.jsx'

const Home = () => {
    return (
        <div >
            <div className='h-screen w-screen fixed'><Video /></div>
            <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
                <HomeTopText/>
                <HomeBottomText/>
            </div>

        </div>
    )
}

export default Home