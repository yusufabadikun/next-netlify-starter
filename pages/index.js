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
          <a href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x21a2D6828d706b08E30B5c794ad5D9311B3dD32F&chainId=42161">Buy Now</a> |  <a href="#">Whitepaper</a>  |  <a href="https://dexscreener.com/arbitrum/0x21a2D6828d706b08E30B5c794ad5D9311B3dD32F">Chart</a> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
