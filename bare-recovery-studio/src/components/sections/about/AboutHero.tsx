import FadeIn from '@/components/animations/FadeIn'

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 pt-40 overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-[#25D366]/[0.03] blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-[#25D366] font-medium mb-5">Our Story</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-[#F5F5F2] leading-[0.95] max-w-3xl mb-6">
            Recovery is not a luxury.<br />
            <span className="text-[#C6C6C6]/50">It&apos;s the work.</span>
          </h1>
          <p className="text-[#C6C6C6] text-lg max-w-xl leading-relaxed">
            Bare Recovery Studio was built on one belief: that consistent, science-backed recovery is the missing piece for most athletes and wellness seekers.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
