import DefaultLayout from '@/layouts/DefaultLayout'
import React from 'react'

export default function Home() {
    return (
        <DefaultLayout>
            <section className='w-full min-h-[40rem] border-b-2 flex items-center'>
                <div className='flex flex-col ml-32 gap-3'>
                    <div className=''>
                        <h1 className='text-7xl font-normal'>Olá,</h1>
                        <h2 className='text-8xl font-normal'>Matheus</h2>
                    </div>
                    <span className='pl-1 text-3xl'> programador fullstack </span>
                </div>
            </section>
        </DefaultLayout>
    )
}
