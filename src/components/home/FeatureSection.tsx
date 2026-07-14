interface FeatureSectionProps {
  quoteImage: string
  quoteAlt: string
  body: string[]
  image: string
  imageAlt: string
  reverse?: boolean
}

function FeatureSection({
  quoteImage,
  quoteAlt,
  body,
  image,
  imageAlt,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section className="relative bg-bg-alt md:bg-transparent">
      <div className="absolute inset-x-0 top-1/2 hidden h-[420px] -translate-y-1/2 bg-bg-alt md:block" />

      <div
        className={`relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:gap-16 md:px-12 ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <div className="w-full flex-1">
          <img
            src={image}
            alt={imageAlt}
            className="h-72 w-full object-cover shadow-card md:h-[460px]"
          />
        </div>

        <div className="flex flex-1 items-start gap-6">
          <div className="flex items-start gap-6 overflow-x-auto md:h-[280px] md:flex-none">
            {body.map((text, index) => (
              <p
                key={index}
                className="flex-shrink-0 text-body leading-loose text-text-secondary [writing-mode:vertical-rl]"
              >
                {text}
              </p>
            ))}
          </div>
          <img
            src={quoteImage}
            alt={quoteAlt}
            className="h-auto flex-shrink-0 md:-mt-32"
          />
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
