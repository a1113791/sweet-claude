import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../../assets/logo/logo-light.png'
import quoteImage from '../../assets/quotes/sm-今天是個吃甜點的好日子.png'
import facebookIcon from '../../assets/icons/ic-facebook.png'
import lineIcon from '../../assets/icons/ic-line@.png'

function Footer() {
  return (
    <footer className="bg-primary px-6 py-12 text-text-on-dark md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Sweetaste" className="h-8 w-8" />
            <span className="text-h2">Sweetaste*</span>
          </div>

          <ul className="flex flex-col gap-2 text-body text-text-on-dark-secondary">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              07-1234-5678
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              sweetaste@email.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              800 高雄市新興區幸福路 520 號
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-base transition-transform hover:scale-105"
            >
              <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LINE"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-base transition-transform hover:scale-105"
            >
              <img src={lineIcon} alt="LINE" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <img src={quoteImage} alt="今天是個吃甜點的好日子。" className="h-auto w-auto" />
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-label text-text-on-dark-secondary">
        © 2018 Sweetaste* All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
