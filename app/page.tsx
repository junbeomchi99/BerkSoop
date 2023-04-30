import Link from 'next/link'
import { Modal } from './components/modal/Modal'

export default function Home() {
  return (
    <main>
      <div className="flex h-screen w-full justify-center items-center">
        <div className = "flex">
          <div className = "font-bold ml-2 w-100 h-45 flex-col mt-52 mr-10">
              <h2 className="text-3xl">Get involved in</h2>
              <h2 className = "text-3xl">Berkeley Campus Life</h2>
              <button className = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5"><Link href ="/clubs"> Discover Clubs</Link></button>
          </div>
            <div className = "object-right-bottom mb-80">
              <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/California_Golden_Bears_logo.svg/1200px-California_Golden_Bears_logo.svg.png"
              alt = "Cal"
              width = {600}
              height = {600}
            /> 
            </div>
        </div>
      </div>
    </main>
  )
}
