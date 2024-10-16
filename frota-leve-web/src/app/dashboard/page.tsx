import { GraficoGas } from "@/components/GraficoGas";
import { GraficoViagem } from "@/components/GraficoViagens";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function App() {
    return (
        <main>

            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col ml-64">
                    <Navbar />
                    <main className="flex-1 m-1 p-6">
                        <div className="flex">
                            <GraficoGas />
                        </div>
                        <div>
                            <GraficoViagem />
                        </div>
                    </main>
                </div>
            </div>
        </main>
    );
}
