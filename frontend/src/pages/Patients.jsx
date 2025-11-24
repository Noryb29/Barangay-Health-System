import React, { useEffect } from 'react'
import { usePatientStore } from '../store/usePatientStore'

const Patients = () => {
  const {patients,loading,error,getAllPatients} = usePatientStore();
  
  useEffect(()=>{
    getAllPatients()
  },[getAllPatients])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("patients: ",patients)

  
  return (
    <div>
      <h1 className='text-center'>Hello</h1>
      <div className='flex justify-around items-center p-5 border'>
      <div>
      <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi tortor, congue eget porta sed, congue et turpis. Phasellus dapibus purus at semper gravida. Proin id magna molestie, aliquam tellus quis, feugiat augue. Sed sollicitudin ex ut massa commodo malesuada. Curabitur at felis elit. Nam eleifend vulputate neque, et condimentum sem tincidunt et. Integer tempus id arcu non condimentum. Nam mattis ornare nibh, in efficitur nisi porttitor vel. Donec libero sapien, molestie in risus sit amet, condimentum mollis ante. In vel mauris quis odio porta fermentum vitae ac felis. Sed eleifend nulla nulla. Vestibulum accumsan porta nisl sed placerat. Nullam tincidunt sem et libero efficitur placerat. Vivamus nisl quam, lacinia vitae arcu dapibus, sagittis pellentesque ipsum. In hac habitasse platea dictumst. Fusce gravida velit libero, aliquet ultricies nulla malesuada eu</p>
      </div>
      </div>
    </div>
  )
}

export default Patients