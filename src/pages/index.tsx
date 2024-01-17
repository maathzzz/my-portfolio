import DefaultLayout from '@/layouts/DefaultLayout'
import React, { use, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/home.module.scss'
import useMousePosition from '@/utils/useMousePosition';

export default function Home() {
    // var cursor = document.querySelector(".cursor");
    // var cursor2 = document.querySelector(".cursor2");
    // document.addEventListener("mousemove", function (e) {
    //     cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    // });

    const { x, y } = useMousePosition();
    const size = 400

    useEffect(() => {
        console.log(`Posição do mouse: ${x}, ${y}`)
    }, [x, y]);

    return (
        <motion.div
            className={`${styles.mask} bg-black dark:bg-white`}
            animate={{
                WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            }}
            transition={{ type: "tween", ease: "backOut" }}
        >
            <DefaultLayout>
                <section className='w-full min-h-[40rem] border-b-2 flex justify-center items-center'>
                    <div className='flex flex-col justify-center'>
                        <span className='items-start text-xl font-bold pl-1 text-[#005b96]'>hey, i'm a</span>
                        <span className={`text-7xl font-black ${styles.toRightGradient}`}>FULLSTACK <strong className='text-[#fd9407]'>WEB</strong> </span>
                        <span className='text-7xl font-black'><strong className='text-[#cc063e]'>&</strong> <strong className='text-[#fd9407]'>GAME</strong> <strong className={`${styles.toLeftGradient}`}>DEVELOPER</strong></span>
                    </div>
                    <div className="cursor"></div>
                    <div className="cursor2"></div>
                </section>
            </DefaultLayout>
        </motion.div>
    )
}
