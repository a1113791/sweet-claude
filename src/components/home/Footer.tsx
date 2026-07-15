import logo from '../../assets/logo/logotype-lg-dark.png'
import quoteImage from '../../assets/quotes/sm-今天是個吃甜點的好日子.png'
import facebookIcon from '../../assets/icons/ic-facebook.png'
import lineIcon from '../../assets/icons/ic-line@.png'

function Footer() {
  return (
    <footer className="bg-bg-alt px-6 py-12 text-text-main md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col">
          <img src={logo} alt="Sweetaste" className="h-8 w-auto" />

          <ul className="mt-[120px] flex flex-col gap-2 text-body text-text-secondary">
            <li>07-1234-5678</li>
            <li>sweetaste@email.com</li>
            <li>800 高雄市新興區幸福路 520 號</li>
          </ul>

          <div className="mt-[34px] flex items-center gap-3">
            <a
              href="#"
              aria-label="LINE"
              className="flex h-8 w-8 items-center justify-center transition-transform hover:scale-105"
            >
              <img src={lineIcon} alt="LINE" className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center transition-transform hover:scale-105"
            >
              <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-end gap-6">
          <img src={quoteImage} alt="今天是個吃甜點的好日子。" className="h-auto w-auto" />
          <p className="text-label text-text-secondary">
            © 2018 Sweetaste* All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
