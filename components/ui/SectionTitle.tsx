type SectionTitleProps = {
    eyebrow?: string
    title: string
    description?: string
    align?: 'center' | 'left'
    className?: string
  }
  
  export default function SectionTitle({
    eyebrow,
    title,
    description,
    align = 'center',
    className = '',
  }: SectionTitleProps) {
    const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  
    return (
      <div className={`flex flex-col gap-2 mb-10 ${alignment} ${className}`}>
        {eyebrow && (
          <h5 className="text-muted uppercase tracking-wide font-body">
            {eyebrow}
          </h5>
        )}
        <h2 className="text-foreground font-heading font-bold">
          {title}
        </h2>
        {description && (
          <p className="text-muted max-w-2xl font-body">
            {description}
          </p>
        )}
      </div>
    )
  }
  