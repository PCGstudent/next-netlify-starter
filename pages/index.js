import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Trago</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Trago" />
        <p className="description">
          Craft Drinks <code> </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
