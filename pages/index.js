import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js with data from a Google Sheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Next.js with data from a Google Sheet
        </h1>
        <Link href='/players'>Click here</Link> to view the players.
      </main>
    </>
  )
}
