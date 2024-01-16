import SwitchButton from "@/components/buttons/SwitchButton";

export default function Header() {
    return (
        <header className="fixed mx-auto max-w-screen-xl w-full h-[4rem] bg-[#00000]items-center">
            <div className="flex w-full h-full flex-row justify-between items-center">
                <div className="text-3xl font-bold text-[#cc063e] invisible"><span className="text-[#fd9407]">M</span></div>

                <div className="flex flex-row items-center gap-4">
                    <a className="text-xs font-semibold text-[#141414] duration-75 dark:text-white cursor-pointer dark:hover:text-[#fd9407]">SOBRE</a>
                    <a className="text-xs font-semibold text-[#141414] duration-75 dark:text-white cursor-pointer dark:hover:text-[#fd9407]">PROJETOS</a>
                    <a className="text-xs font-semibold text-[#141414] duration-75 dark:text-white cursor-pointer dark:hover:text-[#fd9407]">CONTATO</a>
                    <SwitchButton />
                </div>
            </div>
        </header>
    )
}
