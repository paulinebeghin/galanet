import { ConteneurNav } from "./compenante/ConteneurNav"
import Header from "./compenante/header/Header"
import Trends from "./compenante/trends/Trends"



function App() {


  return (
    <div className="bg-slate-900 py-3 ">

   <main className="  w-full max-w-360 mx-auto  flex flex-col gap-8 ">
      <nav>
        <ConteneurNav />
      </nav>
      <header>
        <Header />
      </header>
      <div>
        <Trends />
      </div>
  </main>
    </div>



  )
}

export default App
