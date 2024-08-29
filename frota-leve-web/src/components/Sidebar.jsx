import React from 'react'
import {FaHome,FaCog, FaPoll, FaCar,} from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'

const Sidebar = () => {
  return (
    <div className='w-64 bg-white fixed h-full px-6 py-3 text-black'>
      <div className='my-2 mb-4'> 
        <h1 className='text-2x text-black font-bold'> Admin Dashboard</h1>
      </div>
      <hr />
      <ul className='mt-3 text-black font-bold'>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'> 
          <a href="" className='px-3'>
            <FaHome className='inline-block w6 h-6 mr-2 -mt-2'></FaHome>
            Home
          </a>
        </li>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'> 
          <a href="" className='px-3'>
            <FaPoll className='inline-block w6 h-6 mr-2 -mt-2'></FaPoll>
            Dashborad
          </a>
        </li>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'> 
          <a href="" className='px-3'>
            <FaCar className='inline-block w6 h-6 mr-2 -mt-2'></FaCar>
            Veiculos
          </a>
        </li>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'> 
          <a href="" className='px-3'>
            <FaPeopleGroup className='inline-block w6 h-6 mr-2 -mt-2'></FaPeopleGroup>
            Funcioarios
          </a>
        </li>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'> 
          <a href="" className='px-3'>
            <FaCog className='inline-block w6 h-6 mr-2 -mt-2'></FaCog>
            Congifurações
          </a>
        </li>
      </ul>


    </div>
  )
}

export default Sidebar