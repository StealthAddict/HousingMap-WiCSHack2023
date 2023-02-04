import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from 'import/styles/Home.module.css'
import MapChart from './MapChart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Housing Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: Create a pretty webpage with a search bar/sorting label
        to choose what you want to view: eg. specific county/city, user's income level... */}
      <main className={styles.main}>
          <MapChart />
      </main>
    </>
  )
}
