import { Heart } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'

export interface Product {
  id: string
  name: string
  price: number
  tag: string
}

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-border bg-bg-base shadow-card">
      <div className="relative">
        <ImagePlaceholder
          label={product.name}
          className="h-56 w-full rounded-t-md"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-primary px-2 py-1 text-label text-text-on-dark">
          {product.tag}
        </span>
        <button
          type="button"
          aria-label="加入收藏"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-bg-base text-text-secondary shadow-float transition-colors hover:text-primary"
        >
          <Heart className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-body font-medium text-text-main">
            {product.name}
          </h3>
          <span className="text-body font-medium text-text-main">
            NT$ {product.price}
          </span>
        </div>

        <button
          type="button"
          className="mt-auto rounded-sm border border-primary py-2 text-label text-primary transition-colors hover:bg-primary hover:text-text-on-dark"
        >
          加入購物車
        </button>
      </div>
    </article>
  )
}

export default ProductCard
