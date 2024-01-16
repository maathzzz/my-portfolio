import DefaultLayout from '@/layouts/DefaultLayout'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/home.module.css'

export default function Home() {
    return (
        <DefaultLayout>
            <section className='w-full min-h-[40rem] border-b-2 flex justify-center items-center'>
                <div className='flex flex-col justify-center'>
                    <span className='items-start text-xl font-bold pl-1 text-[#005b96]'>hey, i'm a</span>
                    <span className={`text-8xl font-black ${styles.toRightGradient}`}>FULLSTACK <strong className='text-[#cc063e]'>&</strong></span>
                    <span className='text-8xl font-black'><strong className='text-[#fd9407]'>GAME</strong> <strong className={`${styles.toLeftGradient}`}>DEV</strong></span>
                </div>
            </section>
            <section className='p-24'>
                <motion.div
                    className='w-[10rem] h-[10rem] bg-black dark:bg-white rounded-3xl '
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}
                >
                </motion.div>

            </section>
        </DefaultLayout>
    )
}
