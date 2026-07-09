import { Menu, ShoppingCart } from 'lucide-react'

const NAV_LINKS = ['首頁', '甜點', '登入']

function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-bg-base px-6 py-4 md:px-12">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-label font-semibold text-text-on-dark">
          S
        </span>
        <span className="text-h2 text-text-main">Sweetaste*</span>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-label text-text-secondary transition-colors hover:text-primary"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="購物車"
          className="text-text-main transition-colors hover:text-primary"
        >
          <ShoppingCart className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="選單"
          className="text-text-main md:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </header>
  )
}

export default Header
