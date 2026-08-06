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
      { label: 'Focus & Vigilance Duration', value: '4–6 Hours' }
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
        name: 'Red Light Therapy',
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
        name: 'Red Light Therapy',
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
    <section
      className="py-16 md:py-[120px] px-4 md:px-12"
      style={{ background: 'rgba(42,40,41,0.45)' }}
      id="protocol-builder"
    >
      <div className="max-w-[1320px] mx-auto">

        <FadeIn direction="up">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="section-label">Interactive Guide</span>
            <h2
              className="font-display text-[32px] md:text-[52px] mb-4"
              style={{ color: '#f5f0eb', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Build Your Recovery Circuit
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#8a878a' }}>
              Recovery is not one-size-fits-all. Select your physiological goal to assemble your custom sequence.
            </p>
          </div>
        </FadeIn>

        {/* ── Protocol selector — 2×2 card grid ── */}
        <FadeIn direction="up" delay={80}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {protocols.map((p) => {
              const active = activeTab === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className="group text-left p-5 rounded-[20px] transition-all duration-300 focus:outline-none"
                  style={
                    active
                      ? {
                          background: '#d9d1cc',
                          border: '1px solid #d9d1cc',
                          boxShadow: '0 8px 32px rgba(217,209,204,0.22)',
                        }
                      : {
                          background: 'rgba(86,84,86,0.35)',
                          border: '1px solid rgba(196,193,196,0.10)',
                        }
                  }
                  onMouseEnter={e => {
                    if (!active) {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'rgba(86,84,86,0.60)'
                      el.style.borderColor = 'rgba(196,193,196,0.22)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'rgba(86,84,86,0.35)'
                      el.style.borderColor = 'rgba(196,193,196,0.10)'
                    }
                  }}
                >
                  {/* Icon */}
                  <span
                    className="block text-2xl mb-3"
                    style={{ lineHeight: 1 }}
                  >
                    {p.icon}
                  </span>

                  {/* Title */}
                  <span
                    className="block text-sm font-semibold leading-snug mb-1"
                    style={{ color: active ? '#3d3b3d' : '#f5f0eb' }}
                  >
                    {p.title}
                  </span>

                  {/* Goal */}
                  <span
                    className="block text-[10px] uppercase tracking-[0.14em] leading-tight"
                    style={{ color: active ? 'rgba(61,59,61,0.65)' : '#6e6c6e' }}
                  >
                    {p.id === 'nervous-system' && 'Deep Relaxation'}
                    {p.id === 'athletic-restoration' && 'Muscle Recovery'}
                    {p.id === 'cognitive-longevity' && 'Mental Clarity'}
                    {p.id === 'immune-shield' && 'Cellular Defence'}
                  </span>
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* ── Two-column panel ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left — protocol meta */}
          <div className="lg:col-span-4">
            <FadeIn direction="right" delay={100} key={`${activeTab}-meta`}>
              <div
                className="p-8 rounded-[24px] flex flex-col h-full"
                style={{
                  background: 'rgba(42,40,41,0.75)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(196,193,196,0.10)',
                }}
              >
                <span className="section-label mb-1">Scientific Intent</span>
                <h3
                  className="font-display text-2xl mb-3"
                  style={{ color: '#f5f0eb', letterSpacing: '-0.015em' }}
                >
                  {activeProtocol.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#8a878a' }}>
                  {activeProtocol.tagline}
                </p>

                <div
                  className="pt-5 mb-6"
                  style={{ borderTop: '1px solid rgba(196,193,196,0.07)' }}
                >
                  <p className="text-[9px] uppercase tracking-[0.22em] font-semibold mb-2" style={{ color: '#6e6c6e' }}>
                    Physiological Basis
                  </p>
                  <p className="text-xs leading-relaxed italic" style={{ color: '#8a878a' }}>
                    &ldquo;{activeProtocol.scientificBasis}&rdquo;
                  </p>
                </div>

                {/* Targeted impact */}
                <div className="mt-auto space-y-3 mb-6">
                  <p className="text-[9px] uppercase tracking-[0.22em] font-semibold" style={{ color: '#6e6c6e' }}>
                    Targeted Impact
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {activeProtocol.benefits.map((b) => (
                      <div
                        key={b.label}
                        className="p-3 rounded-xl text-center"
                        style={{
                          background: 'rgba(61,59,61,0.80)',
                          border: '1px solid rgba(196,193,196,0.07)',
                        }}
                      >
                        <p className="font-display text-lg mb-0.5" style={{ color: '#f5f0eb', letterSpacing: '-0.02em' }}>
                          {b.value}
                        </p>
                        <p className="text-[8px] uppercase tracking-[0.10em] leading-tight" style={{ color: '#6e6c6e' }}>
                          {b.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.97]"
                  style={{ background: '#d9d1cc', color: '#3d3b3d' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c4c1c4' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d9d1cc' }}
                >
                  Book This Circuit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — timeline steps */}
          <div className="lg:col-span-8">
            <FadeIn direction="left" delay={120} key={`${activeTab}-timeline`}>
              <div
                className="p-8 rounded-[24px]"
                style={{
                  background: 'rgba(86,84,86,0.28)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(196,193,196,0.08)',
                }}
              >
                {/* Timeline header */}
                <div
                  className="flex items-center justify-between pb-4 mb-6"
                  style={{ borderBottom: '1px solid rgba(196,193,196,0.07)' }}
                >
                  <span className="section-label mb-0">Timeline Sequence</span>
                  <span
                    className="text-[10px] uppercase tracking-[0.16em]"
                    style={{ color: '#6e6c6e' }}
                  >
                    Guided Protocol
                  </span>
                </div>

                {/* Steps with connector line */}
                <div className="relative pl-6 md:pl-8 space-y-10">
                  {/* Vertical line */}
                  <div
                    className="absolute left-3 md:left-4 top-3 bottom-3 w-px"
                    style={{ background: 'linear-gradient(to bottom, rgba(196,193,196,0.35), rgba(196,193,196,0.04))' }}
                  />

                  {activeProtocol.steps.map((step, idx) => (
                    <div key={idx} className="relative group/step">
                      {/* Step dot */}
                      <span
                        className="absolute -left-[19px] md:-left-[23px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold transition-all duration-300 group-hover/step:scale-110"
                        style={{
                          background: '#d9d1cc',
                          color: '#3d3b3d',
                          boxShadow: '0 0 12px rgba(217,209,204,0.30)',
                        }}
                      >
                        {idx + 1}
                      </span>

                      <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between">
                        {/* Content */}
                        <div className="space-y-1.5 max-w-[75%]">
                          <h4
                            className="font-display text-lg flex flex-wrap items-center gap-3"
                            style={{ color: '#f5f0eb' }}
                          >
                            {step.name}
                            <span
                              className="text-xs font-normal px-2.5 py-0.5 rounded-full border"
                              style={{
                                color: '#c4c1c4',
                                borderColor: 'rgba(196,193,196,0.18)',
                                background: 'rgba(86,84,86,0.50)',
                              }}
                            >
                              {step.duration}
                            </span>
                          </h4>
                          <p className="text-[10px] uppercase tracking-[0.12em] font-semibold" style={{ color: '#8a878a' }}>
                            {step.spec}
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: '#8a878a' }}>
                            {step.desc}
                          </p>
                        </div>

                        {/* Impact pill */}
                        <div
                          className="shrink-0 md:max-w-[180px] p-3.5 rounded-[14px]"
                          style={{
                            background: 'rgba(61,59,61,0.70)',
                            border: '1px solid rgba(196,193,196,0.10)',
                          }}
                        >
                          <span className="text-[8px] uppercase tracking-[0.16em] font-bold block mb-1" style={{ color: '#c4c1c4' }}>
                            Primary Trigger
                          </span>
                          <span className="text-xs leading-tight block" style={{ color: '#8a878a' }}>
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
