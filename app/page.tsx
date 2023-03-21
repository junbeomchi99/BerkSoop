import Link from 'next/link'
import { Modal } from './components/modal/Modal'

export default function Home() {
  return (
    <main>
      <h1> Home </h1>
      <p>
        <Link href="/clubs">Clubs</Link>
      </p>
    </main>
  )
}
