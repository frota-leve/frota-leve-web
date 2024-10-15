"use client"

import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Funcionarios = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col ml-64">
                <Navbar />
                <main className="flex-1 mt-4 p-6">
               <Dashboard/>
                </main>
            </div>
        </div>
    );
};

export default Funcionarios;
