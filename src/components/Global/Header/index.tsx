import SwitchButton from "@/components/buttons/SwitchButton";
import NavButton from "@/components/Global/Header/NavButton";

export default function Header() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <header className="fixed mx-auto max-w-screen-xl w-full h-[4.5rem] duration-200 bg-[#f8f8f8] dark:bg-[#111111] items-center">
            <div className="flex w-full h-full flex-row justify-between items-center">
                {/* <div className="text-3xl w-[6.5rem] font-bold text-[#cc063e]"><span className="text-[#fd9407]">M</span></div> */}
                <div className="w-[6.5rem]">
                    <div className="w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer" onClick={() => {scrollToTop()}} style={{
                        backgroundImage: 'url(/skelly.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    
                    }}></div>
                </div>

                <div className="flex flex-row items-center gap-6">
                    <span className="cursor-pointer"> sobre </span>
                    <span> projetos </span>
                    <span> contato </span>
                </div>

                <div className="flex flex-row items-center gap-4">
                    <SwitchButton />
                    <NavButton />
                </div>
            </div>
        </header>
    )
}