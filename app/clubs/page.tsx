import { Metadata } from "next";
import getAllClubs from "../lib/getAllClubs";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Clubs'
}

export default async function ClubsPage() {
    const clubsData: Promise<Club[]> = getAllClubs()
    const clubs = await clubsData
    return (
        <div>
            <button data-drawer-target = "default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className = "w-6 h-6" aria-hidden = "true" fill = "currentColor" viewBox = "0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="default-sidebar" className="fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className = "h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className = "space-y-2 font-medium">
                        <div className = "relative mt-6">
                            <span className = "absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className = "w-5 h-5 text-gray-400" viewBox = "0 0 24 24" fill = "none">
                                    <path d = "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                            <input type = "text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search for clubs" />
                        </div>
                        <li>
                            <a href = "#" className= "flex items-center p-2text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className = "ml-2">
                                    <div className = "flex justify-center">
                                        <div className = "flex ml-6">
                                            <select data-te-select-init 
                                            data-te-select-placeholder = "Example placeholder"
                                            multiple>
                                                <option value = "1">Ethnicity</option>
                                                <option value = "2">Two</option>
                                                <option value = "3">Three</option>
                                                <option value = "4">Four</option>
                                                <option value = "5">Five</option>
                                                <option value = "6">Six</option>
                                                <option value = "7">Seven</option>
                                            </select>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href = "#" className = "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className = "flex-1 ml-2 whitespace-nowrap">Kanban</span>
                            </a>
                        </li>
                        <li>
                            <a href = "#" className = "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className = "flex-1 ml-2 whitespace-nowrap">Inbox</span>
                            </a>
                        </li>
                        <li>
                            <a href = "#" className = "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className = "flex-1 ml-2 whitespace-nowrap">Users</span>
                            </a>    
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className = "flex-1 ml-2 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href = "#" className = "flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className = "flex-1 ml-2 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <section>
                            {clubs.map(club => {
                                return (
                                    <> 
                                    <p key = {club.id}>
                                        <Link href = {'/clubs/' + club.id}>{club.name}</Link>
                                        </p>
                                        </>
                                )
                            })}
                        </section>
                    </div>
                </div>
             </aside>
            <div className = "flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className = "text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className = "flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className = "text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>  
            <div className = "flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className = "text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className = "flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className = "text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className = "flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className = "text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
        </div>
    )
} 

