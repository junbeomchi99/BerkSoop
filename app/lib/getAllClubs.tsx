export default async function getAllClubs() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}