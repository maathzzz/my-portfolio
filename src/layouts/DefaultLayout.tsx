import Header from "@/components/Global/Header";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 duration-200">
            {/* mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 */}
            <Header />
            {children}
        </div>
    )
}
