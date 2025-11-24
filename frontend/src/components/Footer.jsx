import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='justify-evenly flex items-center bg-emerald-300 py-5'>

            <ul className='max-w-100'>
                <h1 className='text-center'>Contact Us</h1>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae cursus augue. Suspendisse potenti. Aenean odio leo,
                 consequat quis risus et, ultrices ultrices tellus.
                 Mauris sit amet orci sit amet purus maximus posuere ut vitae lorem. Duis laoreet vestibulum varius. Sed et finibus metus.</p> </li>
            </ul>

            <ul className='max-w-100'>
               <h1 className='text-center'>About Us </h1>
               <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae cursus augue. Suspendisse potenti. Aenean odio leo,
                 consequat quis risus et, ultrices ultrices tellus.
                 Mauris sit amet orci sit amet purus maximus posuere ut vitae lorem. Duis laoreet vestibulum varius. Sed et finibus metus.</p> </li>  
            </ul>

            <ul className='max-w-100'>
                <h1 className='text-center '>Government Links</h1>
                <li><a className='underline hover:decoration-blue-500 hover:text-blue-500' href='https://www.csc.gov.ph/'>Civil Service Commision (CSC)</a></li>
                <li><a className='underline hover:decoration-blue-500 hover:text-blue-500' href='https://www.dilg.gov.ph/'>Department of the Interior and Local Government (DILG)</a></li>
                <li><a className='underline hover:decoration-blue-500 hover:text-blue-500' href='https://www.dti.gov.ph/'>Department of Trade and Industry (DTI)</a></li>
                <li><a className='underline hover:decoration-blue-500 hover:text-blue-500' href='https://www.gsis.gov.ph/'>Government Service Insurance System (GSIS)</a></li>
                <li><a className='underline hover:decoration-blue-500 hover:text-blue-500' href='https://www.gsis.gov.ph/'>Government Service Insurance System (GSIS)</a></li>
                <li><a className='underline hover:decoration-blue-500 hover:text-blue-500' href='https://www.gsis.gov.ph/'>Government Service Insurance System (GSIS)</a></li>

            </ul>

        </footer>
    </div>
  )
}

export default Footer