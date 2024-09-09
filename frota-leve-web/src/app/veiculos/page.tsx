import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VeicleList from "@/components/VeicleList";

const Funcionarios = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col ml-64">
                <Navbar />
                <main className="flex-1 mt-4 p-6">
                <VeicleList />
                </main>
            </div>
        </div>
    );
};

export default Funcionarios;
