import Image from 'next/image'
import BackgroundParticles from '@/components/landing-page/particle-background'
import MainPage from '@/components/landing-page/main-page'
import '@/styles/style.css'
import StarsBackground from '@/components/landing-page/stars-background'

export default function Home() {
  return (
    <main>
      <div className='min-h-screen flex justify-center items-center'>
        <StarsBackground/>
        <section className=''>
          <div className='flex justify-center items-center text-center'>
            <h1 contentEditable className='text-white neon uppercase font-ktp text-5xl font-bold inline-block'>
              broken website
            </h1>
          </div>
          <div className='text-white'>
            <MainPage/>
          </div>
        </section>
      </div>
    </main>    
  )
}
