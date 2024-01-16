import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/providers/theme-provider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}