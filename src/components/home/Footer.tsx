import { AtSign, Mail, MapPin, Phone, Share2 } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-primary-dark px-6 py-12 text-text-on-dark md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-h2">Sweetaste*</span>

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
              aria-label="社群連結"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-base text-primary-dark transition-transform hover:scale-105"
            >
              <AtSign className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="社群分享"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-base text-primary-dark transition-transform hover:scale-105"
            >
              <Share2 className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="text-right">
          <p className="text-h2">今天是個</p>
          <p className="text-h2">吃甜點的好日子。</p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-label text-text-on-dark-secondary">
        © 2018 Sweetaste* All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
