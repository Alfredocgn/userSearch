
"use client"
import Image from 'next/image'
import { DarkAndLightBtn } from './components/DarkAndLightBtn'
import { SearchBtn } from './components/SearchBtn'
import Link from 'next/link'

export default function Home() {
  return (
    <h1 className='flex min-h-screen w-full bg-stone-100 p-2 pt-10 transition-all sm:p-4 sm:pt-12' >
      <div className='mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2'>
        <section className='flex justify-between gap-3 p-2'>
          <p className='text-xl font-semibold '>AcgnDev</p>
          <DarkAndLightBtn/>
        </section>
        <section className='flex flex-col gap-6'>
          <SearchBtn />
          <main className='flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-8'>
            <section className='flex gap-4'>
              <Image src="" alt='user image' width={200} height={200} className='h-20 w-20 rounded-full' />
              <div className='flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row'>
                <div >
                  <h1>Username </h1>
                  <Link href={'#'} className='text-blue-500 hover:underline text-sm transition-all'>@Userid</Link>
                </div>
                <p className=''>Joined 19 sep 2019</p>
              </div>
            </section>
          </main>
        </section>
      </div>
    </h1>

  )
}
