import DefaultLayout from '@/layouts/DefaultLayout'
import styles from '@/styles/home.module.scss'
import StickyCursor from '@/components/StickyCursor';
import TextMask from '@/components/TextMask';

export default function Home() {
    return (
        <DefaultLayout>
            <StickyCursor />
            <section className='w-full cursor-crosshair min-h-[40rem] flex justify-center items-center'>
                <div className='flex flex-col justify-center'>
                    <TextMask phrase={"hey, i'm a"} className='items-start text-xl font-bold pl-1 text-[#005b96]'></TextMask>
                    <div className="flex flex-row gap-5">
                        <TextMask phrase={"FULLSTACK"} className={`text-7xl font-black ${styles.toRightGradient}`}> </TextMask> <TextMask phrase='WEB' className='text-[#fd9407] text-7xl font-black'></TextMask>
                    </div>
                    <div className="flex flex-row gap-5">
                        <TextMask phrase='&' className='text-7xl font-black text-[#cc063e]' /> <TextMask phrase='GAME' className='text-7xl font-black text-[#fd9407]' /> <TextMask phrase='DEVELOPER' className={`${styles.toLeftGradient} text-7xl font-black`} />
                    </div>
                </div>
            </section>
            <section className='w-full min-h-[40rem] flex justify-center items-center'>
                <TextMask phrase={'Fullstack'}  />
                </section>
        </DefaultLayout >
    )
}
