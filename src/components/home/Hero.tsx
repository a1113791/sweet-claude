import ImagePlaceholder from './ImagePlaceholder'

const CATEGORIES = [
  { label: '本日精選', tone: 'bg-secondary text-text-main' },
  { label: '人氣推薦', tone: 'bg-primary text-text-on-dark' },
  { label: '新品上市', tone: 'bg-primary-dark text-text-on-dark' },
] as const

function Hero() {
  return (
    <section className="relative px-6 pb-16 pt-8 md:px-12">
      <ImagePlaceholder
        label="甜點主視覺"
        className="h-64 w-full rounded-lg shadow-card sm:h-80 md:h-[420px]"
      />

      <div className="relative -mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md shadow-float sm:mx-6 sm:grid-cols-3 md:mx-16">
        {CATEGORIES.map((category) => (
          <div
            key={category.label}
            className={`flex items-center justify-center px-6 py-8 text-label ${category.tone}`}
          >
            {category.label}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
