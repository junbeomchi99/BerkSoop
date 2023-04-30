export default async function getClub(clubId: string) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + clubId)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}
