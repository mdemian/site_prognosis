import { Metadata } from 'next'
import InteractiveHero from '@/components/InteractiveHero'
import ValueBlocks from '@/components/ValueBlocks'
import InteractiveDemos from '@/components/InteractiveDemos'
import ProcessFlow from '@/components/ProcessFlow'
import Solutions from '@/components/Solutions'
import ResultsTable from '@/components/ResultsTable'
import OnboardingSteps from '@/components/OnboardingSteps'
import TrustSecurity from '@/components/TrustSecurity'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
    title: 'Transforme dados em decisões estratégicas',
    description: 'Advanced Analytics & Operations Research para otimizar sua supply chain com Machine Learning e otimização matemática.',
    openGraph: {
        title: 'Transforme dados em decisões estratégicas | Prognosis',
        description: 'Advanced Analytics & Operations Research para otimizar sua supply chain.',
    },
}

export default function HomePage() {
    return (
        <>
            <InteractiveHero />
            <ValueBlocks />
            <InteractiveDemos />
            <ProcessFlow />
            <Solutions />
            <ResultsTable />
            <OnboardingSteps />
            <TrustSecurity />
            <CTASection />
        </>
    )
}
