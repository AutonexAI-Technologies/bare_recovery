import FadeIn from '@/components/animations/FadeIn'
import { founderInfo } from '@/data/founder'

export default function PhilosophySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <div className="p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/[0.06]">
            <div className="rounded-[calc(2rem-0.375rem)] px-8 py-16 md:py-24 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]" style={{ background: 'rgba(17,17,17,0.8)' }}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#25D366] font-medium mb-6">Founder&apos;s Philosophy</p>
              <h2 className="font-display text-7xl md:text-9xl font-black text-[#F5F5F2] mb-6 tracking-tight">
                {founderInfo.philosophy.tagline}
              </h2>
              <div className="w-12 h-px bg-[#25D366] mx-auto mb-8" />
              <p className="text-[#C6C6C6] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {founderInfo.philosophy.description}
              </p>
              <p className="text-[#C6C6C6]/40 text-sm mt-6">— {founderInfo.name}, Founder</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
