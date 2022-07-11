import React from 'react'

import '@app/styles'
import { AppProps } from '@app/layouts'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const getPageLayout = Component.pageLayout ?? (page => page)
  return (
    <>
      <Head>
        <title>Waffles</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content="Dragonpay Commerce Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {getPageLayout(<Component {...pageProps} />)}
    </>
  )
}
