import ProductCard, { type Product } from './ProductCard'

const PRODUCTS: Product[] = [
  { id: '1', name: '焦糖馬卡龍', price: 450, tag: '本日精選' },
  { id: '2', name: '莓果千層蛋糕', price: 450, tag: '本日精選' },
  { id: '3', name: '藍莓布丁塔', price: 450, tag: '本日精選' },
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
