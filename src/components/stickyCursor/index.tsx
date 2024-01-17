'use client'
import { useEffect } from 'react'
import styles from './style.module.scss'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function index() {

    const cursorSize = 40;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const manageMouseMove = (e: any) => {
        const { clientX, clientY } = e;

        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        return () => window.removeEventListener("mousemove", manageMouseMove)
    })
    return (
        <motion.div
            className={`${styles.cursor} border-[1px] border-black dark:border-white`}
            style={{ left: smoothMouse.x, top: smoothMouse.y }}
        >
            {/* <motion.div
                className={`${styles.dot} w-2 h-2 bg-white border-black dark:border-white`}
                style={{ left: smoothMouse.x, top: smoothMouse.y }}
            >

            </ motion.div> */}
        </ motion.div>
    )
}
