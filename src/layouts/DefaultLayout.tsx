import Header from "@/components/Global/Header";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
