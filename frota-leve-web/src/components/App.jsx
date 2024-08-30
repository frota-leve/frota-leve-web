
import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'

function App () {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className='w-full h-full flex'>
     <Sidebar sidebarToggle={sidebarToggle}/>
     <Dashboard 
     sidebarToggle={sidebarToggle}
     setSidebarToggle={setSidebarToggle}/>
    

    </div>
  )
}

export default App;