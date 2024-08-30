import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Dashboard = ({sidenbarToggle,setSidebarToggle}) => {
  return (
    <div className='w-full'>
        <Navbar/>
        <Sidebar/>

    </div>
  )
}

export default Dashboard