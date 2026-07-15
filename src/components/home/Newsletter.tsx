import { ArrowRight, Mail } from 'lucide-react'
import logo from '../../assets/logo/logo-light.png'

function Newsletter() {
  return (
    <section className="bg-primary px-6 py-10 md:px-12">
      <form className="mx-auto flex max-w-4xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3 text-text-on-dark">
          <img src={logo} alt="Sweetaste" className="h-8 w-8" />
          <span className="text-body">訂閱你我的甜蜜郵件</span>
        </div>

        <div className="flex w-full max-w-sm items-center gap-2 bg-bg-alt py-2 pl-4 md:h-[56px] md:w-[380px]">
          <Mail className="h-4 w-4 text-text-secondary" strokeWidth={1.5} />
          <input
            type="email"
            placeholder="輸入你的 Email"
            className="w-full bg-transparent text-body text-text-main outline-none placeholder:text-text-secondary"
          />
          <button
            type="submit"
            aria-label="訂閱"
            className="flex flex-shrink-0 items-center justify-center px-[24px] py-[20px] bg-secondary text-text-main transition-transform hover:scale-105"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </form>
    </section>
  )
}

export default Newsletter
