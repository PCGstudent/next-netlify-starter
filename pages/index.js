import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Trago</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/tragoredondobranco.jpg" alt="Tragoredondobranco" style={{ maxWidth: '100%', height: 'auto' }} />
      </main>
    </div>
  )
}
