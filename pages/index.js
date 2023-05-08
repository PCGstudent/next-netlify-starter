import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Trago</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/minha-foto.jpg" alt="Minha foto" style={{ maxWidth: '100%', height: 'auto' }} />
      </main>
    </div>
  )
}
