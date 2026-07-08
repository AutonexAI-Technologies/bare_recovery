const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Walk in or book via WhatsApp. Our recovery experts will assess your fatigue levels and training load.',
    align: 'right',
  },
  {
    num: '02',
    title: 'Activation',
    desc: 'Choose your recovery stack — Full Circuit, Contrast Therapy, or Compression Therapy. Most elite athletes combine protocols for maximum effect.',
    align: 'left',
  },
  {
    num: '03',
    title: 'Realization',
    desc: 'Post-session, enjoy our hydration bar and relax in our quiet zone before re-entering the world revitalized.',
    align: 'right',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto overflow-hidden">
      <h2
        className="font-display text-[28px] md:text-[48px] mb-12 md:mb-20 text-center text-[#FFFBF5]"
        style={{ letterSpacing: '-0.02em' }}
      >
        Your Path to Recovery
      </h2>

      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.05] hidden md:block" />

        <div className="space-y-24">
          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              {step.align === 'right' ? (
                <>
                  {/* Left content */}
                  <div className="w-full md:w-[45%] text-center md:text-right">
                    <h4 className="font-display text-2xl mb-4 text-[#FFFBF5]">
                      {step.num}. {step.title}
                    </h4>
                    <p className="text-[#A19F97] leading-relaxed text-sm md:text-base">{step.desc}</p>
                  </div>
                  {/* Center dot */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative shrink-0"
                    style={{
                      background: 'rgba(188, 163, 134, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(188, 163, 134, 0.25)',
                    }}
                  >
                    <div className="w-3 h-3 bg-[#BCA386] rounded-full" />
                  </div>
                  {/* Right empty */}
                  <div className="hidden md:block w-[45%]" />
                </>
              ) : (
                <>
                  {/* Left empty */}
                  <div className="hidden md:block w-[45%]" />
                  {/* Center dot */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative shrink-0"
                    style={{
                      background: 'rgba(188, 163, 134, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(188, 163, 134, 0.25)',
                    }}
                  >
                    <div className="w-3 h-3 bg-[#BCA386] rounded-full" />
                  </div>
                  {/* Right content */}
                  <div className="w-full md:w-[45%] text-center md:text-left">
                    <h4 className="font-display text-2xl mb-4 text-[#FFFBF5]">
                      {step.num}. {step.title}
                    </h4>
                    <p className="text-[#A19F97] leading-relaxed text-sm md:text-base">{step.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
