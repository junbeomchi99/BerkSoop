export default async function getAllClubs() {
    const res = await fetch('http://localhost:3030/clubs')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}