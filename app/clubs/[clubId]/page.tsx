import getClub from "@/app/lib/getClub"
import getAllClubs from "@/app/lib/getAllClubs"
import ClubDetail from "./components/ClubDetail"
import { Suspense } from "react"

type Params = {
    params: {
        clubId: string
    }
}

export default async function ClubPage({ params: { clubId }}: Params) {
    return (
      <div>
          <div className = "flex-row">
            <div>
              <button className="ml-12 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
                Back to Summary View
              </button>
              <div className="ml-12 mt-5 box-content h-96 w-8/12 p-4 border-4 border-gray-200 bg-white rounded-lg">
                <div className = "flex flex-col">
                  <div className="h-full w-full bg-white flex flex-row">
                    <div className="flex flex-wrap justify-left">
                      <div className="ml-6 mt-5 mr-5  w-1 sm:w-32 px-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                      </div>
                    </div>
                    <h2 className = "text-4xl text-gray-800 font-semibold mt-12">{clubId} - Club Name</h2>
                  </div>
                  <div className = "flex flex-row">
                    <div className = "mt-5 ml-10 mr-5 font-medium text-gray-800">
                      - Active Club Members
                    </div>
                    <div className = "mt-5 ml-5 mr-5 font-medium text-gray-800">
                      -Deadline to Apply 
                    </div>
                  </div>
                  <div className = "ml-10">
                    <div className="px-3.5 mt-6 mb-6">
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                         Tag 1
                      </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                         Tag 2
                      </button> 
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                         Tag 3
                      </button>                     
                    </div>
                  </div>
                  <div className = "font-medium text-gray-800 ml-10">
                    Who We Are
                    <p>Lorem ipsum dolor sit amet. Eos tempore reprehenderit et earum eveniet cum molestiae atque hic reiciendis impedit. Ut asperiores iusto vel neque dolore qui voluptatem pariatur! Est sapiente voluptas id nulla doloribus aut aliquam corporis cum tempora laborum. Qui asperiores autem et doloremque quasi non reiciendis praesentium et consectetur repudiandae et debitis fugit ab corrupti enim. Aut dolorum cupiditate sit cupiditate neque qui fugit nesciunt ut autem minus sed deleniti saepe ut architecto harum eos aperiam aspernatur. Qui consequatur enim a debitis dolorem ab amet quas ea nostrum mollitia qui quidem itaque.</p> 
                  </div>
                </div>
              </div>
              <div className = "flex flex-row">
                <div className="ml-12 mt-6 mr-12 box-content h-96 w-5/12 p-4 border-4 border-gray-200 bg-white rounded-lg">
                  <div className ="h-full w-full bg-white"></div>
                </div>
                <div className ="mt-6 ml-4 box-content h-96 w-1/5 p-4 border-4 border-gray-200 bg-white rounded-lg">
                  <div className ="h-full w-full bg-white"></div>
                </div>
              </div>
            </div>
        </div>
        <br />
        <Suspense fallback={<h2>Loading...</h2>}>
            <p>Work in Progress ...</p>
        </Suspense>
      </div>
    )
  }