import DefaultLayout from '@/layouts/DefaultLayout'
import React, { use, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/home.module.scss'
import useMousePosition from '@/utils/useMousePosition';
import StickyCursor from '@/components/StickyCursor';

export default function Home() {
    return (
        <DefaultLayout>
            <StickyCursor />
            <section className='w-full min-h-[40rem] flex justify-center items-center'>
                <div className='flex flex-col justify-center'>
                    <span className='items-start text-xl font-bold pl-1 text-[#005b96]'>hey, i'm a</span>
                    <span className={`text-7xl font-black ${styles.toRightGradient}`}>FULLSTACK <strong className='text-[#fd9407]'>WEB</strong> </span>
                    <span className='text-7xl font-black'><strong className='text-[#cc063e]'>&</strong> <strong className='text-[#fd9407]'>GAME</strong> <strong className={`${styles.toLeftGradient}`}>DEVELOPER</strong></span>
                </div>
            </section>
            <section className='w-full min-h-[40rem] flex justify-center items-center'>
                </section>
        </DefaultLayout >
    )
}
