'use client'
import { useEffect } from 'react'
import styles from './style.module.scss'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function StickyCursor() {
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

    const dotSize = 20;

    const dot = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const manageDotMove = (e: any) => {
        const { clientX, clientY } = e;

        dot.x.set(clientX - dotSize / 2);
        dot.y.set(clientY - dotSize / 2);
    }


    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const dotSmoothOption = { damping: 20, stiffness: 300, mass: 1}

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const smoothDot = {
        x: useSpring(mouse.x, dotSmoothOption),
        y: useSpring(mouse.y, dotSmoothOption)
    }

    useEffect(() => {
        window.addEventListener("dotmove", manageDotMove)
        // return () => window.removeEventListener("dotmove", manageDotMove)
        window.addEventListener("mousemove", manageMouseMove)
        return () => window.removeEventListener("mousemove", manageMouseMove)
    })
    return (
        <>
            <motion.div
                className={`${styles.cursor} border-[1px] border-black dark:border-white`}
                style={{ left: smoothMouse.x, top: smoothMouse.y }}
            >
                {/* <motion.div
                    className={`${styles.dot} border-[1px] border-black dark:border-white`}
                    style={{ left: smoothDot.x, top: smoothDot.y }}
                >
                </ motion.div> */}
            </ motion.div>
            
        </>
    )
}
