import { Heart } from 'lucide-react'

export interface Product {
  id: string
  name: string
  price: number
  tag: string
  image: string
}

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col bg-bg-base shadow-card sm:w-[300px]">
      <div className="relative h-56 sm:h-[315px]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 bg-primary px-2 py-1 text-label text-text-on-dark [writing-mode:vertical-rl]">
          {product.tag}
        </span>
        <button
          type="button"
          aria-label="加入收藏"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-primary transition-colors hover:text-primary/70"
        >
          <Heart className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex">
          <div className="flex-1 border border-bg-alt px-[33px] py-[14px]">
            <h3 className="text-body font-medium text-text-main">
              {product.name}
            </h3>
          </div>
          <div className="border border-bg-alt py-[14px] pl-[25px] pr-[20px]">
            <span className="font-nav text-[20px] font-semibold leading-6 text-text-main">
              NT$ {product.price}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="mt-auto whitespace-nowrap border border-bg-alt bg-bg-alt px-[90px] py-4 font-nav text-[24px] font-semibold leading-5 text-primary transition-colors hover:bg-primary/10"
        >
          加入購物車
        </button>
      </div>
    </article>
  )
}

export default ProductCard
