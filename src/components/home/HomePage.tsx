import Header from './Header'
import Hero from './Hero'
import FeatureSection from './FeatureSection'
import CtaBanner from './CtaBanner'
import ProductGrid from './ProductGrid'
import Newsletter from './Newsletter'
import Footer from './Footer'
import quoteWhyDessert from '../../assets/quotes/lg-為什麼選擇了做甜點.png'
import quoteWhyEat from '../../assets/quotes/lg-為什麼一定要吃甜點.png'
import pancakePhoto from '../../assets/photos/photo-1525203135335-74d272fc8d9c.avif'
import oatmealPhoto from '../../assets/photos/photo-1490914327627-9fe8d52f4d90.avif'

const FEATURE_BODY = [
  '青山依舊在，幾度夕陽紅。慣看秋月春風。',
  '一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。',
  '是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。',
]

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-base">
      <Header />

      <main className="flex-1">
        <Hero />

        <FeatureSection
          quoteImage={quoteWhyDessert}
          quoteAlt="為什麼選擇了做甜點？"
          body={FEATURE_BODY}
          image={pancakePhoto}
          imageAlt="鬆餅特寫"
        />

        <FeatureSection
          quoteImage={quoteWhyEat}
          quoteAlt="為什麼一定要吃甜點？"
          body={FEATURE_BODY}
          image={oatmealPhoto}
          imageAlt="燕麥碗特寫"
          reverse
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
