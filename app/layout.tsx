import type { Metadata } from 'next'
import { Inter, Source_Sans_3, Noto_Sans_Math } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@/components/Analytics'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const sourceSans = Source_Sans_3({
    subsets: ['latin'],
    variable: '--font-source-sans',
    display: 'swap',
})

const notoSansMath = Noto_Sans_Math({
    subsets: ['math'],
    weight: '400',
    variable: '--font-math',
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        default: 'Prognosis - Advanced Analytics & Operations Research',
        template: '%s | Prognosis'
    },
    description: 'Transformamos dados em decisões estratégicas. Advanced Analytics & Operations Research para otimizar sua supply chain com Machine Learning e otimização matemática.',
    keywords: ['supply chain', 'analytics', 'machine learning', 'otimização', 'previsão de demanda', 'S&OP'],
    authors: [{ name: 'Prognosis' }],
    creator: 'Prognosis',
    publisher: 'Prognosis',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://prognosis.com.br'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://prognosis.com.br',
        title: 'Prognosis - Advanced Analytics & Operations Research',
        description: 'Transformamos dados em decisões estratégicas. Advanced Analytics & Operations Research para otimizar sua supply chain.',
        siteName: 'Prognosis',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Prognosis - Advanced Analytics & Operations Research',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Prognosis - Advanced Analytics & Operations Research',
        description: 'Transformamos dados em decisões estratégicas.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${sourceSans.variable} ${notoSansMath.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#FE5302" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Preload critical fonts */}
                <link
                    rel="preload"
                    href="/fonts/inter-var.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Prognosis",
                            "url": "https://prognosis.com.br",
                            "logo": "https://prognosis.com.br/logo.svg",
                            "description": "Advanced Analytics & Operations Research para otimizar supply chain",
                            "foundingDate": "2020",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "BR"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "email": "contato@prognosis.com.br"
                            },
                            "sameAs": [
                                "https://linkedin.com/company/prognosis",
                                "https://twitter.com/prognosis"
                            ]
                        })
                    }}
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
                <Analytics />
            </body>
        </html>
    )
}
