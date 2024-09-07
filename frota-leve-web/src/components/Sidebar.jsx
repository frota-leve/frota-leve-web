import Link from "next/link"
import { FaCar, FaCog, FaHome, FaPoll, } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'

const Sidebar = () => {
  return (
    <div className='w-64 bg-gray-200 h-full px-6 py-3 text-black fixed top-0 left-0'>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-black font-bold'> Admin Dashboard</h1>
      </div>
      <hr className='border-t-2 border-black' />
      <ul className='mt-3 text-black font-bold'>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'>
          <Link href='/' className='psx-3 flex items-center'>
            <FaHome className='inline-block w6 h-6 mr-2 -mt-2'></FaHome>
            Home
          </Link>
        </li>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'>
          <Link href='/dashboard' className='psx-3 flex items-center'>
            <FaPoll className='inline-block w6 h-6 mr-2 -mt-2'></FaPoll>
            Dashborad
          </Link>
        </li>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'>
          <Link href='/veiculos' className='psx-3 flex items-center'>
            <FaCar className='inline-block w6 h-6 mr-2 -mt-2'></FaCar>
            Veiculos
          </Link>
        </li>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'>
          <Link href='/funcionarios' className='psx-3 flex items-center'>
            <FaPeopleGroup className='inline-block w6 h-6 mr-2 -mt-2'></FaPeopleGroup>
            Funcioarios
          </Link>
        </li>
        <li className='mb-2 rounded hover:shandow hover:bg-[#FFC314] py-2'>
          <Link href='/config' className='psx-3 flex items-center'>
            <FaCog className='inline-block w6 h-6 mr-2 -mt-2'></FaCog>
            Congifurações
          </Link>
        </li>
      </ul>


    </div>
  )
}

export default Sidebar