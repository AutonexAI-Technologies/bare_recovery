'use client'

import { useState } from 'react'
import FadeIn from '@/components/animations/FadeIn'
import { CONTACT_INFO } from '@/lib/constants'

interface ProtocolStep {
  name: string
  duration: string
  spec: string
  benefit: string
  desc: string
}

interface Protocol {
  id: string
  title: string
  tagline: string
  scientificBasis: string
  icon: string
  benefits: { label: string; value: string }[]
  steps: ProtocolStep[]
}

const protocols: Protocol[] = [
  {
    id: 'nervous-system',
    title: 'Nervous System Reset',
    tagline: 'Deep parasympathetic down-regulation for recovery, stress relief & deep sleep.',
    scientificBasis: 'Activates the vagus nerve, lowers resting heart rate, and elevates natural melatonin production by transitioning the body from fight-or-flight to rest-and-digest.',
    icon: '😴',
    benefits: [
      { label: 'Cortisol Reduction', value: '-40%' },
      { label: 'Deep Sleep Quality', value: '+35%' },
      { label: 'Vagal Nerve Activation', value: 'High' }
    ],
    steps: [
      {
        name: 'Far-Infrared Sauna',
        duration: '25 Mins',
        spec: '65°C · Far Infrared',
        benefit: 'Smooth vasodilation & mild sweating to initiate relaxation.',
        desc: 'Deep far-infrared waves penetrate joint tissues, calming the sympathetic nervous system and dilating blood vessels to reduce systemic tension.'
      },
      {
        name: 'Active Breathing Break',
        duration: '5 Mins',
        spec: 'Ambient Air',
        benefit: 'Coherent heart-rate variable breathing.',
        desc: 'A short physiological sigh breathing transition in a cool ambient area to settle heart rate before thermal contrast.'
      },
      {
        name: 'Temperate Plunge',
        duration: '2 Mins',
        spec: '10°C · Steady Chill',
        benefit: 'Gentle vagus stimulation without massive shock.',
        desc: 'A calming immersion that stimulates blood flow back to vital organs and triggers a mild, pleasant endorphin discharge.'
      },
      {
        name: 'Normatec Compression',
        duration: '15 Mins',
        spec: 'Zone 3 Intensity',
        benefit: 'Passive lymphatic flush & recovery.',
        desc: 'Dynamic air compression massaging your legs, completing the down-regulation sequence by encouraging deep venous return.'
      }
    ]
  },
  {
    id: 'athletic-restoration',
    title: 'Athletic Restoration',
    tagline: 'Accelerated muscular tissue recovery, lactic acid flushing, and structural repair.',
    scientificBasis: 'Utilizes targeted thermal cycling to stimulate Heat Shock Proteins (HSP) and passive lymphatic compression to flush metabolic waste from deep muscle fibers.',
    icon: '🏃‍♂️',
    benefits: [
      { label: 'Lactic Acid Clearance', value: 'Instant' },
      { label: 'Muscle Soreness (DOMS)', value: '-55%' },
      { label: 'HSP Activation', value: 'Max' }
    ],
    steps: [
      {
        name: 'Traditional Finnish Sauna',
        duration: '15 Mins',
        spec: '85°C · Dry Heat',
        benefit: 'HSP synthesis & intense cardiovascular flush.',
        desc: 'Extreme dry heat increases blood plasma volume and stimulates heat shock proteins to rebuild cellular proteins damaged during high-intensity training.'
      },
      {
        name: 'Cryo Ice Plunge',
        duration: '3 Mins',
        spec: '4°C · Ice Chill',
        benefit: 'Vasoconstriction & inflammation suppression.',
        desc: 'Rapid cold shock constricts peripheral blood vessels, driving oxygenated blood to the core and instantly blocking inflammatory pathway signals.'
      },
      {
        name: 'Traditional Finnish Sauna (Repeat)',
        duration: '10 Mins',
        spec: '85°C · Re-heating',
        benefit: 'Re-perfusion of nutrient-rich blood.',
        desc: 'Re-entering the heat causes rapid blood vessel expansion, flushing fresh, oxygenated, nutrient-dense blood back to exhausted limbs.'
      },
      {
        name: 'Normatec Compression',
        duration: '20 Mins',
        spec: 'Zone 5 Intensity',
        benefit: 'Enhanced cellular waste extraction.',
        desc: 'Pulsing pressure mimics normal muscle pumps, flushing out accumulated extracellular fluid and waste metabolites.'
      }
    ]
  },
  {
    id: 'cognitive-longevity',
    title: 'Cognitive Reset & Focus',
    tagline: 'Norepinephrine & dopamine spikes for mental resilience and relentless clarity.',
    scientificBasis: 'Triggers a massive, sustained release of catecholamines (dopamine and norepinephrine) that elevates energy, vigilance, and focus for hours.',
    icon: '⚡',
    benefits: [
      { label: 'Norepinephrine Release', value: '+500%' },
      { label: 'Dopamine Baseline Shift', value: '+250%' },
      { label: 'Focus & Vigilance Duration', value: '4 - 6 Hours' }
    ],
    steps: [
      {
        name: 'Traditional Finnish Sauna',
        duration: '20 Mins',
        spec: '80°C · High Temp',
        benefit: 'Beta-endorphin accumulation.',
        desc: 'Mild hyperthermia increases blood flow to the brain, stimulating neurotrophic factors (BDNF) which support neural health and memory formation.'
      },
      {
        name: 'Extreme Ice Plunge',
        duration: '4 Mins',
        spec: '3.5°C · Ultimate Shock',
        benefit: 'Catecholamine cascade.',
        desc: 'Immersion up to the collarbone triggers the highest natural norepinephrine response, resetting mental fatigue and raising physical grit.'
      },
      {
        name: 'Red Light Therapy integration',
        duration: '15 Mins',
        spec: '660nm & 850nm',
        benefit: 'Mitochondrial ATP production.',
        desc: 'Resting under clinical-grade red light waves activates cytochrome c oxidase inside cells, increasing cellular energy molecules (ATP) and cognitive focus.'
      }
    ]
  },
  {
    id: 'immune-shield',
    title: 'Metabolic & Immune Shield',
    tagline: 'Autophagy stimulation, white blood cell mobilization, and cellular renewal.',
    scientificBasis: 'Induces metabolic stress that initiates autophagy (cellular cleanup of damaged organelles) and stimulates leukocyte production to fortify the immune response.',
    icon: '🛡️',
    benefits: [
      { label: 'White Blood Cell Count', value: '+20%' },
      { label: 'Autophagy Activation', value: 'High' },
      { label: 'Metabolic Rate Elevation', value: '+15%' }
    ],
    steps: [
      {
        name: 'Traditional Finnish Sauna',
        duration: '20 Mins',
        spec: '90°C · Intense Dry',
        benefit: 'Fever response mimicking & leukocyte shift.',
        desc: 'Heating core temperature mimics a temporary artificial state of fever, signaling the immune system to ramp up production of active white blood cells.'
      },
      {
        name: 'Cryo Ice Plunge',
        duration: '2 Mins',
        spec: '5°C · Ice Immersion',
        benefit: 'Cellular cleanup cycle trigger.',
        desc: 'Cold stress triggers systemic brown fat activation, driving glucose clearance and accelerating mitochondrial turnover.'
      },
      {
        name: 'Red Light Therapy session',
        duration: '20 Mins',
        spec: 'Near-Infrared Depth',
        benefit: 'Cellular respiration & skin rejuvenation.',
        desc: 'Mitochondria absorb light wavelengths, lowering oxidative stress markers and kickstarting cellular renewal throughout the body.'
      }
    ]
  }
]

export default function ProtocolBuilder() {
  const [activeTab, setActiveTab] = useState(protocols[0].id)
  const activeProtocol = protocols.find((p) => p.id === activeTab) || protocols[0]

  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    `Hi! I'd like to book a custom session for the "${activeProtocol.title}" Recovery Protocol.`
  )}`

  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12 relative overflow-hidden" id="protocol-builder">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] pointer-events-none -z-10 rounded-full" style={{ background: 'radial-gradient(circle, rgba(188, 163, 134, 0.03) 0%, transparent 70%)' }} />

      <div className="max-w-[1320px] mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BCA386] block mb-3">
              Interactive Circuit Guide
            </span>
            <h2 className="font-display text-[38px] md:text-[54px] text-[#FFFBF5] mb-4">
              Build Your Recovery Circuit
            </h2>
            <p className="text-[#A19F97] text-sm md:text-base">
              Science shows recovery is not one-size-fits-all. Select your physiological goal below to assemble your custom sequence.
            </p>
          </div>
        </FadeIn>

        {/* ── Selection Tabs ── */}
        <FadeIn direction="up" delay={80}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {protocols.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeTab === p.id
                    ? 'bg-[#BCA386] text-[#12110F] shadow-[0_4px_20px_rgba(188,163,134,0.25)]'
                    : 'text-[#A19F97] bg-[#1B1916]/40 hover:bg-[#1B1916]/80 hover:text-[#FFFBF5]'
                }`}
                style={{
                  border: activeTab === p.id ? '1px solid #BCA386' : '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span>{p.icon}</span>
                {p.title}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* ── Display Panel ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left panel: Protocol metadata */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            <FadeIn direction="right" delay={100} key={`${activeTab}-meta`}>
              <div
                className="p-8 rounded-[24px] h-full flex flex-col"
                style={{
                  background: 'rgba(27,25,22,0.65)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(188,163,134,0.15)',
                }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#BCA386] mb-3 block">
                  Scientific Intent
                </span>
                <h3 className="font-display text-2xl text-[#FFFBF5] mb-3">{activeProtocol.title}</h3>
                <p className="text-[#A19F97] text-sm leading-relaxed mb-6">
                  {activeProtocol.tagline}
                </p>

                <div className="pt-6 border-t border-white/[0.06] mb-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A19F97]/60 mb-2">Physiological Basis</p>
                  <p className="text-xs text-[#A19F97]/80 leading-relaxed italic">
                    &ldquo;{activeProtocol.scientificBasis}&rdquo;
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A19F97]/60">Targeted Impact</p>
                  <div className="grid grid-cols-3 gap-2">
                    {activeProtocol.benefits.map((b) => (
                      <div key={b.label} className="p-3 rounded-xl bg-[#12110F]/60 border border-white/[0.05] text-center">
                        <p className="font-display text-lg text-[#FFFBF5] mb-0.5">{b.value}</p>
                        <p className="text-[9px] uppercase tracking-[0.1em] text-[#A19F97]/60 leading-tight">{b.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-[#BCA386] text-[#12110F] py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.18em] transition-all hover:bg-[#cbb499] active:scale-98"
                >
                  Book This Circuit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right panel: Timeline Steps */}
          <div className="lg:col-span-8">
            <FadeIn direction="left" delay={120} key={`${activeTab}-timeline`}>
              <div
                className="p-8 rounded-[24px] space-y-8"
                style={{
                  background: 'rgba(27,25,22,0.45)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#BCA386]">
                    Timeline Sequence
                  </span>
                  <span className="text-[10px] text-[#A19F97]/60 uppercase tracking-[0.15em]">
                    Guided Protocols
                  </span>
                </div>

                <div className="relative pl-6 md:pl-8 space-y-12">
                  {/* Vertical sequence connection line */}
                  <div className="absolute left-3 md:left-4 top-3 bottom-3 w-px bg-gradient-to-b from-[#BCA386]/60 to-[#BCA386]/0" />

                  {activeProtocol.steps.map((step, idx) => (
                    <div key={idx} className="relative group/step">
                      {/* Step Number Dot */}
                      <span
                        className="absolute -left-[19px] md:-left-[23px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-[#12110F] bg-[#BCA386] transition-all group-hover/step:scale-110"
                        style={{
                          boxShadow: '0 0 10px rgba(188, 163, 134, 0.4)',
                        }}
                      >
                        {idx + 1}
                      </span>

                      {/* Step Details */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="space-y-1.5 max-w-[80%]">
                          <h4 className="font-display text-lg text-[#FFFBF5] flex items-center gap-3">
                            {step.name}
                            <span className="text-xs text-[#BCA386] border border-[#BCA386]/25 rounded-full px-2 py-0.5 bg-[#BCA386]/5">
                              {step.duration}
                            </span>
                          </h4>
                          <p className="text-xs uppercase tracking-[0.1em] text-[#A19F97] font-semibold">
                            {step.spec}
                          </p>
                          <p className="text-xs text-[#A19F97] leading-relaxed">
                            {step.desc}
                          </p>
                        </div>

                        {/* Impact highlight pill */}
                        <div
                          className="md:max-w-[200px] shrink-0 p-3.5 rounded-xl text-left"
                          style={{
                            background: 'rgba(188, 163, 134, 0.04)',
                            border: '1px solid rgba(188, 163, 134, 0.12)',
                          }}
                        >
                          <span className="text-[9px] uppercase tracking-[0.15em] text-[#BCA386] font-bold block mb-1">
                            Primary Trigger
                          </span>
                          <span className="text-xs text-[#A19F97]/90 leading-tight block">
                            {step.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
