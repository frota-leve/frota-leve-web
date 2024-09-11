import Sidebar from "@/components/Sidebar";

import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <main>

      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64">
          <Navbar />
          <main className="flex-1 mt-4 p-6">

          </main>
        </div>
      </div>
    </main>
  );
}
