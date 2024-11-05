import { ConteudoMain } from "@/components/ConteudoMain";
import Sidebar from "@/components/Sidebar";

export default function App() {
  return (
    <main>

      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64">
          <main className="flex-1 m-1 p-6">
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
              <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <ConteudoMain />
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
