import { Image as ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  label: string
  className?: string
}

function ImagePlaceholder({ label, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center gap-2 border border-border bg-bg-alt text-text-secondary ${className}`}
    >
      <ImageIcon className="h-6 w-6" strokeWidth={1.5} />
      <span className="text-label">{label}</span>
    </div>
  )
}

export default ImagePlaceholder
