import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <title>matheus a. | fullstack & game dev.</title>
            </Head>
            <body className='bg-[#f8f8f8] dark:bg-[#111111] duration-200'>
                <div className=''>
                    <Main />
                    <NextScript />
                </div>
            </body>
        </Html>
    )
}