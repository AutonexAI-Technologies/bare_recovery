import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren from '@/components/animations/StaggerChildren'

const values = [
  { icon: '🔬', title: 'Evidence-Based', desc: 'Every modality we offer has peer-reviewed research behind it. No pseudoscience.' },
  { icon: '🎯', title: 'Consistency First', desc: 'We embody the "BE BORING" philosophy — showing up consistently beats intensity every time.' },
  { icon: '🤝', title: 'Community', desc: 'We\'re building a community of people serious about their health and performance.' },
  { icon: '💡', title: 'Education', desc: 'We want every member to understand why they\'re recovering, not just how.' },
]

export default function MissionSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="right">
            <p className="text-xs uppercase tracking-[0.25em] text-[#25D366] font-medium mb-4">Mission</p>
            <h2 className="font-display text-4xl font-bold text-[#F5F5F2] mb-6 leading-tight">
              Making premium recovery accessible
            </h2>
            <p className="text-[#C6C6C6] leading-relaxed mb-4">
              World-class recovery technology has been available to elite athletes for decades. We&apos;re bringing the same tools to Kompally, Secunderabad — without the elite price tag.
            </p>
            <p className="text-[#C6C6C6] leading-relaxed">
              Our mission is simple: help people recover better so they can perform better and feel better in every aspect of life.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerMs={80}>
            {values.map((v) => (
              <div key={v.title} className="p-5 rounded-2xl border border-white/[0.06] hover:border-white/10 transition-all duration-300" style={{ background: 'rgba(17,17,17,0.75)' }}>
                <span className="text-2xl block mb-3">{v.icon}</span>
                <h3 className="font-display font-semibold text-[#F5F5F2] mb-2">{v.title}</h3>
                <p className="text-[#C6C6C6]/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
