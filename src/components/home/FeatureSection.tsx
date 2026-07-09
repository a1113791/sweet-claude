import ImagePlaceholder from './ImagePlaceholder'

interface FeatureSectionProps {
  eyebrow: string
  heading: string
  body: string
  imageLabel: string
  reverse?: boolean
  tone?: 'base' | 'alt'
}

function FeatureSection({
  eyebrow,
  heading,
  body,
  imageLabel,
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
        <ImagePlaceholder
          label={imageLabel}
          className="h-72 w-full flex-1 rounded-lg shadow-card md:h-96"
        />

        <div className="flex flex-1 flex-col items-start gap-4 text-left">
          <span className="text-label text-text-secondary">{eyebrow}</span>
          <h2 className="text-display text-primary">{heading}</h2>
          <p className="max-w-md text-body leading-loose text-text-secondary">
            {body}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
