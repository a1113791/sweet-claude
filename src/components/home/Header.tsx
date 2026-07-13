import { Menu, ShoppingCart } from 'lucide-react'
import logo from '../../assets/logo/logo-all-dark.png'

const NAV_LINKS = ['首頁', '甜點', '登入']

function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 md:px-12">
      <img src={logo} alt="Sweetaste*" className="h-8 w-auto" />

      <nav className="flex items-center gap-4 md:gap-8">
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-nav text-left text-[16px] font-semibold tracking-normal text-text-secondary transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="購物車"
            className="text-text-main transition-colors hover:text-primary"
          >
            <ShoppingCart
              className="h-5 w-5"
              strokeWidth={1.5}
              fill="currentColor"
            />
          </button>
          <button
            type="button"
            aria-label="選單"
            className="text-text-main md:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
