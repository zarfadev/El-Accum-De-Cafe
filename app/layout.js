import localFont from 'next/font/local'
import './globals.css'
import Head from 'next/head'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
})

export const metadata = {
  title: 'Zarfala | El Accum De Cafe',
  description:
    'El Accum De Cafe'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <Head>
        <meta
          name='keywords'
          content='Zarfala, El Accum De Cafe'
        />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content='Zarfala | El Accum De Cafe' />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
