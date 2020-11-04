import { AppPropsType } from 'next/dist/next-server/lib/utils'
import React from 'react'
import './_app.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppPropsType) {
  return (
    <div id="App">
      <Head>
        <title>KocsMa 🍻</title>
        <meta
          name="description"
          content={'Nézd meg mi történt egy éve a Kocsma csoportban!'}
        />
        <meta name="og:title" content="KocsMa 🍻" />
        <meta
          name="og:description"
          content={'Nézd meg mi történt egy éve a Kocsma csoportban!'}
        />
        <meta name="og:url" content={'https://pub.meszarosdezso.com/'} />
        <meta name="og:image" content={'https://i.imgur.com/WOggsXm.jpg'} />
        <link rel="icon" type="image/png" href="/logo120.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
