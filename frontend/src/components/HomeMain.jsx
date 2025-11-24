import React from 'react'
import nurseImg from '../assets/nurse.png'

const HomeMain = () => {
  return (
    <div className='justify-around text-center flex p-2 bg-emerald-400 py-5'>

      <div>
        <h1>Head Nurse</h1>

        <div className='flex justify-evenly gap-10'>
            <img src={nurseImg} className='' />
            <div>
                <h1 className='mt-5'>Nurse Name</h1>
                <p className='text-justify max-w-50'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae cursus augue. Suspendisse potenti. Aenean odio leo, consequat quis risus et, ultrices ultrices tellus. Mauris sit amet orci sit amet purus maximus posuere ut vitae lorem. Duis laoreet vestibulum varius. Sed et finibus metus. 
                </p>
            </div>
        </div>


      </div>

      <div>
        <h1>Mission and Vision</h1>
        <div>
            <h1>Our Mission</h1>
            <p className='max-w-50 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae cursus augue. Suspendisse potenti. Aenean odio leo, consequat quis risus et, ultrices ultrices tellus </p>
        </div>
        <div>
            <h1>Our Vision</h1>
            <p className='max-w-50 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae cursus augue. Suspendisse potenti. Aenean odio leo, consequat quis risus et, ultrices ultrices tellus </p>
        </div>
      </div>

      <div>
        <h1>Goals</h1>
        <p className='max-w-50 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae cursus augue. Suspendisse potenti. Aenean odio leo, consequat quis risus et, ultrices ultrices tellus </p>
        <p className='max-w-50 text-justify mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae cursus augue. Suspendisse potenti. Aenean odio leo, consequat quis risus et, ultrices ultrices tellus </p>
      </div>
    </div>
  )
}

export default HomeMain
