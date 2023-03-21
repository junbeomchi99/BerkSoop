import { Metadata } from "next";
import getAllClubs from "../lib/getAllClubs";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Clubs'
}

export default async function ClubsPage() {
    const clubsData: Promise<Club[]> = getAllClubs()

    const clubs = await clubsData

    const clubList = (
        <section>
            <h2>
                <Link href='/'>Back to Home</Link>
            </h2>
            <br />
            {clubs.map(club => {
                return (
                    <>
                        <p key={club.id}>
                            <Link href={'/clubs/' + club.id}>{club.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )

    return clubList


}
