import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="https://pbs.twimg.com/profile_images/1566835133172264961/kAwO96xY_400x400.png" />
      </Head>

      <main>
        <img src="https://pbs.twimg.com/profile_images/1566835133172264961/kAwO96xY_400x400.png"></img>
        <Header title="$nitroINU" />
        <p className="description">
          an Arbitrum Nitro Memecoin
        </p>
      </main>

      <Footer />
    </div>
  )
}
