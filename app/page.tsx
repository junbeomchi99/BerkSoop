'use client'
import { useRouter } from 'next/navigation'
import Button from './components/button/Button'
import Image from 'next/image'
import HeroImage from 'public/HeroImage.svg'

export default function Home() {
  const router = useRouter()
  const handleClick = () => router.push('/clubs')
  
  return (
      <div className="flex h-full w-full justify-center gap-[180px]">
        <div className = "flex flex-col justify-center gap-[30px]">
            <div className="text-h1 font-semibold whitespace-pre-wrap">
              Get Involved in<br/>Berkeley Campus Life
            </div>
            <Button onClick={handleClick} size='btn-md'>
              <div className='text-white text-h3'>Discover Clubs</div>
            </Button>
        </div>
            <div>
              <Image priority src={HeroImage} width={517} height={533} alt='college club'/>
            </div>
        </div>
 )
};
