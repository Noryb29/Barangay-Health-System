import React from 'react'
import clinicImg from '../assets/clinic.jpg'
import { Cards } from '../components/Cards'
import canitoanLogo from '../assets/canitoanLogo.jpg'


const Services = () => {
  return (
    <div>
        <h1 className='text-center mt-5 text-6xl'>Services</h1>

        <div className='flex justify-center gap-5 p-5'>
            <img src={clinicImg} className=' bg-contain object-fill'/>
            <div>
                <h1 className='text-center'>Canitaon Barangay Clinic</h1>
                <p className='max-w-100 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus purus at semper gravida. Proin id magna molestie, aliquam tellus quis, feugiat augue. Sed sollicitudin ex ut massa commodo malesuada. Curabitur at felis elit. Nam eleifend vulputate neque, et condimentum sem tincidunt et. Integer tempus id arcu non condimentum. Nam mattis ornare nibh, in efficitur nisi porttitor vel. Donec libero sapien, molestie in risus sit amet, condimentum mollis ante. In vel mauris quis odio porta fermentum vitae ac felis. Sed eleifend nulla nulla. Vestibulum accumsan porta nisl sed placerat. Nullam tincidunt sem et libero efficitur placerat. Vivamus nisl quam, lacinia vitae arcu dapibus, sagittis pellentesque ipsum. In hac habitasse platea dictumst. Fusce gravida velit libero, aliquet ultricies nulla malesuada eu</p>
                
                <div className='flex justify-around py-5'>
                    <img className='max-w-20 h-auto rounded-full' src={canitoanLogo}/>
                    <img className='max-w-20 h-auto rounded-full' src={canitoanLogo}/>
                    <img className='max-w-20 h-auto rounded-full' src={canitoanLogo}/>
                </div>

            </div>
        </div>
        <Cards/>


    </div>
  )
}

export default Services