import React from 'react'
import ImageSlider from '../components/ImageSlider.jsx'
import canitoanLogo from '../assets/canitoanLogo.jpg'
import HomeMain from '../components/HomeMain.jsx'
import { Cards } from '../components/Cards.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <div>

    <div className='flex text-center justify-start-safe py-5 items-center gap-10 bg-emerald-500'>
    <a href='https://www.google.com/maps/place/Canito-an,+Cagayan+De+Oro+City,+Misamis+Oriental/data=!4m2!3m1!1s0x32ff8ca6efa76217:0x8a2c13aa584988a4?sa=X&ved=1t:242&ictx=111'><img src={canitoanLogo} className='max-w-25 rounded-full ml-110 border-2 border-emerald-500'/></a>
    <header className='text-4xl font-bold'>CANITOAN BARANGAY CENTER</header>
    </div>

    <ImageSlider />
    <HomeMain/>
    <Cards/>

    

   </div>
  )
}

export default Home