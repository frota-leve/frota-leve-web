import React from 'react'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Configuracao = () => {
  return (
    <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col ml-64">
                <Navbar />
                <div className='bg-blue-500'>
                  aaaaa

                </div>
            </div>
        </div>  
        
  )
}

export default Configuracao