import HeroSection from '@/components/sections/home/HeroSection'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import StudioVideoSection from '@/components/sections/home/StudioVideoSection'
import WhyBare from '@/components/sections/home/WhyBare'
import ProtocolBuilder from '@/components/sections/home/ProtocolBuilder'
import PricingPreview from '@/components/sections/home/PricingPreview'
import LocationSection from '@/components/sections/home/LocationSection'
import SocialProof from '@/components/sections/home/SocialProof'
import FounderIntro from '@/components/sections/home/FounderIntro'
import HowItWorks from '@/components/sections/home/HowItWorks'
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
      <HeroSection />
      <ServicesGrid />
      <StudioVideoSection />
      <WhyBare />
      <ProtocolBuilder />
      <HowItWorks />
      <FounderIntro />
      <PricingPreview />
      <SocialProof />
      <LocationSection />
    </>
  )
}