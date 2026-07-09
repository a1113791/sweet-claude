import Header from './Header'
import Hero from './Hero'
import FeatureSection from './FeatureSection'
import CtaBanner from './CtaBanner'
import ProductGrid from './ProductGrid'
import Newsletter from './Newsletter'
import Footer from './Footer'

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-base">
      <Header />

      <main className="flex-1">
        <Hero />

        <FeatureSection
          eyebrow="為什麼"
          heading="選擇了做甜點？"
          body="青山依舊在，幾度夕陽紅。慢看秋月春，是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。"
          imageLabel="鬆餅特寫"
          tone="base"
        />

        <FeatureSection
          eyebrow="為什麼"
          heading="一定要吃甜點？"
          body="青山依舊在，幾度夕陽紅。慢看秋月春，是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。"
          imageLabel="燕麥碗特寫"
          reverse
          tone="alt"
        />

        <CtaBanner />

        <ProductGrid />
      </main>

      <Newsletter />
      <Footer />
    </div>
  )
}

export default HomePage
