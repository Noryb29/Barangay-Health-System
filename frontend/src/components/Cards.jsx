import React from 'react'
import redHeart from '../assets/healthcareCards/redHeart.png'
import redCross from '../assets/healthcareCards/redCross.png'
import doctors from '../assets/healthcareCards/doctors.png'


export const Cards = () => {
  return (

    <div className="flex flex-wrap justify-center md:justify-around gap-10 py-30 bg-emerald-300">

  <div className="card bg-base-100 w-96 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <figure className="px-10 pt-10">
      <img src={doctors} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Card Title</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div className="card-actions">
        <button className="btn btn-primary">Avail Now</button>
      </div>
    </div>
  </div>

  <div className="card bg-base-100 w-96 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <figure className="px-10 pt-10">
      <img src={redCross} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Card Title</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div className="card-actions">
        <button className="btn btn-primary">Avail Now</button>
      </div>
    </div>
  </div>

  <div className="card bg-base-100 w-96 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <figure className="px-10 pt-10">
      <img src={redHeart} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Card Title</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div className="card-actions">
        <button className="btn btn-primary">Avail Now</button>
      </div>
    </div>
  </div>

</div>



  )
}
