import HeroSection from '@/components/sections/home/HeroSection'
import TrustBadges from '@/components/sections/home/TrustBadges'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import StudioVideoSection from '@/components/sections/home/StudioVideoSection'
import WhyBare from '@/components/sections/home/WhyBare'
import RecoveryScience from '@/components/sections/home/RecoveryScience'
import ProtocolBuilder from '@/components/sections/home/ProtocolBuilder'
import HowItWorks from '@/components/sections/home/HowItWorks'
import FounderIntro from '@/components/sections/home/FounderIntro'
import PricingPreview from '@/components/sections/home/PricingPreview'
import SocialProof from '@/components/sections/home/SocialProof'
import LocationSection from '@/components/sections/home/LocationSection'
import { SITE_CONFIG } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Kompally's Premier Recovery Studio`,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
}

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic hero — logo, word reveal, service ticker */}
      <HeroSection />

      {/* 2. Scrolling trust/equipment strip */}
      <TrustBadges />

      {/* 3. All 6 recovery services — asymmetric bento grid */}
      <ServicesGrid />

      {/* 4. Studio tour video + space stats */}
      <StudioVideoSection />

      {/* 5. What differentiates Bare — editorial row layout */}
      <WhyBare />

      {/* 6. Science cards — evidence behind each modality */}
      <RecoveryScience />

      {/* 7. Interactive protocol selector */}
      <ProtocolBuilder />

      {/* 8. 4-step process walkthrough */}
      <HowItWorks />

      {/* 9. Founder profile — no live counter */}
      <FounderIntro />

      {/* 10. Pricing — 3-column cards */}
      <PricingPreview />

      {/* 11. Social proof + Instagram follow CTA + book CTA */}
      <SocialProof />

      {/* 12. Location + map */}
      <LocationSection />
    </>
  )
}