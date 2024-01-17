import SwitchButton from "@/components/buttons/SwitchButton";

export default function Header() {
    return (
        <header className="fixed mx-auto max-w-screen-xl w-full h-[4rem] bg-[#00000]items-center">
            <div className="flex w-full h-full flex-row justify-between items-center">
                <div className="text-3xl font-bold text-[#cc063e] invisible"><span className="text-[#fd9407]">M</span></div>

                <div className="flex flex-row items-center gap-4">
                    {/* <a className="text-xs font-semibold text-[#141414] duration-75 dark:text-white cursor-pointer dark:hover:text-[#fd9407]">SOBRE</a>
                    <a className="text-xs font-semibold text-[#141414] duration-75 dark:text-white cursor-pointer dark:hover:text-[#fd9407]">PROJETOS</a>
                    <a className="text-xs font-semibold text-[#141414] duration-75 dark:text-white cursor-pointer dark:hover:text-[#fd9407]">CONTATO</a> */}
                    <SwitchButton />
                </div>
            </div>
        </header>
    )
}

// 'use client';
// import { useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion';
// import MenuButton from './MenuButton/index';
// import styles from './style.module.scss';
// import Nav from './Nav';
// import SwitchButton from "@/components/buttons/SwitchButton";

// const menu = {
//     open: {
//         width: "430px",
//         height: "270px",
//         top: "-25px",
//         right: "-25px",
//         transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
//         backgroundColor: "#FFFFFF",
//     },
//     closed: {
//         width: "100px",
//         height: "40px",
//         top: "0px",
//         right: "0px",
//         transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
//     }
// }

// export default function Index() {
//     const [isActive, setIsActive] = useState(false);

//     return (
//         <div className={styles.header}>
//             <motion.div
//                 className={styles.menu}
//                 variants={menu}
//                 animate={isActive ? "open" : "closed"}
//                 initial="closed"
//             >
//                 <AnimatePresence>
//                     {isActive && <Nav />}
//                 </AnimatePresence>
//             </motion.div>
//             <MenuButton isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
//         </div>
//     )
// }