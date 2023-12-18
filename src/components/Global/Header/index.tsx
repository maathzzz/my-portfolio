export default function Header() {
    return (
        <header className="fixed w-full h-[4rem] bg-transparent items-center">
            <div className="flex h-full flex-row justify-between items-center px-14">
                <div className="text-3xl font-bold text-[#cc063e]"><span className="text-[#fd9407]">M</span>atheus A.</div>

                <div className="flex flex-row items-center gap-4">
                    <a className="text-base font-semibold text-white cursor-pointer hover:text-[#fd9407]">Sobre mim</a>
                    <a className="text-base font-semibold text-white cursor-pointer hover:text-[#fd9407]">Projetos</a>
                    <a className="text-base font-semibold text-white cursor-pointer hover:text-[#fd9407]">Contato</a>
                </div>
            </div>
        </header>
    )
}
