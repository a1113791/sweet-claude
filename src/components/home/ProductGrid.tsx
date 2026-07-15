import ProductCard, { type Product } from './ProductCard'
import photo1 from '../../assets/photos/photo-1514517220017-8ce97a34a7b6.avif'
import photo2 from '../../assets/photos/photo-1525203135335-74d272fc8d9c.avif'
import photo3 from '../../assets/photos/photo-1504473089979-b1c4993a9653.avif'

const PRODUCTS: Product[] = [
  { id: '1', name: '焦糖馬卡龍', price: 450, tag: '本日精選', image: photo1 },
  { id: '2', name: '莓果千層蛋糕', price: 450, tag: '本日精選', image: photo2 },
  { id: '3', name: '藍莓布丁塔', price: 450, tag: '本日精選', image: photo3 },
]

function ProductGrid() {
  return (
    <section className="bg-bg-base px-6 pb-20 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
