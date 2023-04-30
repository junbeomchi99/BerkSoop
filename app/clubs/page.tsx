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
                                <div className="flex flex-col space-y-4">
                                    <div>
                                        <label htmlFor="category" className="text-lg font-medium mb-2">Category</label>
                                        <select id="category" name="category[]" multiple className="block w-full p-2 border border-gray-300 rounded-lg">
                                            <option value="business">Business</option>
                                            <option value="design">Design</option>
                                            <option value="consulting">Consulting</option>
                                            <option value="engineering">Engineering</option>
                                            <option value="performance">Performance</option>
                                            <option value="marketing">Marketing</option>
                                            <option value="finance">Finance</option>
                                            <option value="sports">Sports</option>
                                            <option value="art">Art</option>
                                            <option value="research">Research</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="ethnicity" className="text-lg font-medium mb-2">Ethnicity</label>
                                        <select id="ethnicity" name="ethnicity[]" multiple className="block w-full p-2 border border-gray-300 rounded-lg">
                                            <option value="korean">Korean</option>
                                            <option value="chinese">Chinese</option>
                                            <option value="american">American</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="purpose" className="text-lg font-medium mb-2">Purpose</label>
                                        <select id="purpose" name="purpose[]" multiple className="block w-full p-2 border border-gray-300 rounded-lg">
                                            <option value="social">Social</option>
                                            <option value="professional">Professional</option>
                                            <option value="education">Education</option>
                                            <option value="hobby">Hobby</option>
                                        </select>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown search <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            <div id="dropdownSearch" className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                                <div className="p-3">
                                    <label htmlFor="input-group-search" className="sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="input-group-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user"/>
                                    </div>
                                </div>
                                <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                                    <li>
                                        <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-11" className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Bonnie Green</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input checked id="checkbox-item-12" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-12" className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Jese Leos</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="checkbox-item-13" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-13" className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Michael Gough</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="checkbox-item-14" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-14" className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Robert Wall</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="checkbox-item-15" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-15" className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Joseph Mcfall</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="checkbox-item-16" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-16" className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Leslie Livingston</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="checkbox-item-17" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-17" className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Roberta Casas</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
             </aside>
            <section>
                {clubs.map(club => {
                    return (
                        <>
                        <div key={club.id} className="flex items-center justify-center h-48 w-5/6 mb-4 ml-72 rounded bg-inherit border border-gray-300">
                            <div className="flex flex-row">
                                <div className="flex items-start">
                                    <div className="object-contain w-1 sm:w-2/12 pl-36 pr-6 mt-10">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png"
                                            alt="..."
                                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                                        />
                                    </div>
                                    <div className="flex flex-col divide-gray-300 dark:divide-gray-700">
                                        <Link href = {'/clubs/' + club.id}>
                                            <div className="py-4 text-2xl text-gray-900 dark:text-white">
                                                {club.name}
                                            </div>
                                        </Link>
                                        <cite className="text-medium text-gray-500 dark:text-gray-400">
                                            Club description
                                        </cite>
                                        <div className="px-3.5 mt-6">
                                            <button
                                                type="button"
                                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            >
                                                Tag 1
                                            </button>
                                            <button
                                                type="button"
                                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            >
                                                Tag 2
                                            </button>
                                            <button
                                                type="button"
                                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            >
                                                Tag 3
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className="float-right mt-10 mr-10 bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 h-16 border border-gray-400 rounded shadow">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                        </>
                    )
                })}
            </section>
        </div>
    )
}