import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Players data frm Google Sheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Players data coming from a Google Sheet.
        </h1>
        <Link href='/players'>Click here</Link> to view the players.
      </main>
    </>
  )
}
