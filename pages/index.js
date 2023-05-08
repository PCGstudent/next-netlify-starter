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
        <img src="/Trago.jpg" alt="Trago" />
        <p className="description">
         <code> </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
