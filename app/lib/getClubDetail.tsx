export default async function getClubDetail(clubId: string) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+ clubId)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}
