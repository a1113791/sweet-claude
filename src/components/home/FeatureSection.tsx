interface FeatureSectionProps {
  quoteImage: string
  quoteAlt: string
  body: string
  image: string
  imageAlt: string
  reverse?: boolean
  tone?: 'base' | 'alt'
}

function FeatureSection({
  quoteImage,
  quoteAlt,
  body,
  image,
  imageAlt,
  reverse = false,
  tone = 'base',
}: FeatureSectionProps) {
  return (
    <section
      className={`${tone === 'alt' ? 'bg-bg-alt' : 'bg-bg-base'} px-6 py-16 md:px-12`}
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-10 md:gap-16 ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-72 w-full flex-1 rounded-lg object-cover shadow-card md:h-96"
        />

        <div className="flex flex-1 flex-col items-start gap-4 text-left">
          <img src={quoteImage} alt={quoteAlt} className="h-auto w-auto" />
          <p className="max-w-md text-body leading-loose text-text-secondary">
            {body}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
