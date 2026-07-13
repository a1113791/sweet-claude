import heroImage from '../../assets/photos/photo-1473256599800-b48c7c88cd7e.avif'

const CATEGORIES = [
  { label: '本日精選', tone: 'bg-secondary/80 text-text-main' },
  { label: '人氣推薦', tone: 'bg-primary/80 text-text-on-dark' },
  { label: '新品上市', tone: 'bg-primary/80 text-text-on-dark' },
] as const

function Hero() {
  return (
    <section className="relative px-6 pb-16 pt-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        <img
          src={heroImage}
          alt="甜點主視覺"
          className="aspect-[940/496] w-full object-cover shadow-card"
        />

        <div className="relative -mt-10 flex flex-col overflow-hidden rounded-md shadow-float sm:mx-6 sm:flex-row md:mx-16">
          {CATEGORIES.map((category) => (
            <div
              key={category.label}
              className={`flex w-full flex-shrink-0 items-center justify-center px-6 py-8 backdrop-blur-[5px] sm:h-[256px] sm:w-[260px] ${category.tone}`}
            >
              <span className="text-[24px] sm:[writing-mode:vertical-rl]">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
