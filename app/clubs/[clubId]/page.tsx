import getClub from "@/app/lib/getClub"
import getClubDetail from "@/app/lib/getClubDetail"
import ClubDetail from "./components/ClubDetail"
import { Suspense } from "react"

type Params = {
    params: {
        clubId: string
    }
}

export default async function ClubPage({ params: { clubId }}: Params) {
    const clubData: Promise<Club> = getClub(clubId)
    const clubDetailData: Promise<ClubDetail[]> = getClubDetail(clubId)

    const club = await clubData

    return (
      <div>
        <h2>{club.name}</h2>
        <br />
        <Suspense fallback={<h2>Loading...</h2>}>
            {/* @ts-expect-error Server Component */}
            <ClubDetail promise={clubDetailData} />
        </Suspense>
      </div>
    )
  }