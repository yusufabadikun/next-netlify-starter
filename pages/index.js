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
        <p className="link">
          <a href="https://app.sushi.com/miso/0x6D705023Bec40528E1322738C866F04789F3559A?chainId=42161">Fairsale</a> |  <a href="#">Whitepaper</a>  |  <a href="#">Chart</a> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
