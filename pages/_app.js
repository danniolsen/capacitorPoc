import { useEffect } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import AppUrlListener from './AppUrlListener'
import Layout from '../components/Layout'
import { defineCustomElements } from '@ionic/pwa-elements/loader'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    defineCustomElements(window)
  })

  return (
    <div className="wrapper">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Layout>
        <AppUrlListener></AppUrlListener>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
