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
    <section className="bg-bg-alt px-6 py-16 md:px-12">
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-10 md:gap-16 ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-72 w-full flex-1 object-cover shadow-card md:h-96"
        />

        <div className="flex flex-1 items-start gap-6 overflow-x-auto">
          <img src={quoteImage} alt={quoteAlt} className="h-auto flex-shrink-0" />
          {body.map((text, index) => (
            <p
              key={index}
              className="flex-shrink-0 text-body leading-loose text-text-secondary [writing-mode:vertical-rl]"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
