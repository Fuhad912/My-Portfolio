export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="eyebrow mb-3.5">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-3.5 text-base font-normal text-neutral-300 sm:text-lg">{description}</p> : null}
    </div>
  )
}
