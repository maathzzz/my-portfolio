import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Button({ isActive, toggleMenu }: any) {
    return (
        <div className={styles.button}>
            <motion.div
                className={styles.slider}
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{ duration: 0.2, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <div
                    className={styles.el}
                    onClick={() => { toggleMenu() }}
                >
                    <PerspectiveText label={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>} />
                </div>
                <div
                    className={styles.el}
                    onClick={() => { toggleMenu() }}
                >
                    <PerspectiveText label={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>} />
                </div>
            </motion.div>
        </div>
    )
}

function PerspectiveText({ label }: any) {
    return (
        <div className={styles.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}