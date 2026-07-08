import { founderInfo } from '@/data/founder'
import FadeIn from '@/components/animations/FadeIn'

export default function FounderStory() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Story copy */}
          <FadeIn direction="right">
            <p className="text-xs uppercase tracking-[0.25em] text-[#25D366] font-medium mb-4">The Founder</p>
            <h2 className="font-display text-4xl font-bold text-[#F5F5F2] mb-6 leading-tight">
              Meet {founderInfo.name}
            </h2>
            <div className="space-y-4 text-[#C6C6C6] leading-relaxed">
              {founderInfo.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={founderInfo.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 text-[#F5F5F2] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/5 transition-all duration-300"
              >
                Instagram {founderInfo.instagram.handle}
              </a>
              <a
                href={founderInfo.links.consultation1on1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#25D366]/20 transition-all duration-300"
              >
                1:1 Consultation
              </a>
            </div>
          </FadeIn>

          {/* Stats card */}
          <FadeIn direction="left" delay={120}>
            <div className="p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/[0.06]">
              <div className="rounded-[calc(2rem-0.375rem)] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]" style={{ background: 'rgba(17,17,17,0.85)' }}>
                <div className="grid grid-cols-1 gap-5">
                  {founderInfo.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B0B0B]/60 border border-white/[0.05]">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                        <span className="text-[#25D366] font-display font-bold text-sm">{stat.value.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-display font-bold text-xl text-[#F5F5F2]">{stat.value}</p>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#C6C6C6]/50">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
