'use client'

import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="relative container-lg section-lg">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Transformamos dados em{' '}
                        <span className="text-primary-400">decisões automatizadas</span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
                        IA, matemática e estatística para prever, otimizar e executar com eficiência.
                        Combinamos modelos estatísticos, machine learning e otimização matemática para reduzir incerteza, elevar produtividade e acelerar resultados.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/contato"
                            className="btn btn-primary btn-lg group"
                        >
                            Falar com um especialista
                            <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                        </Link>

                        <Link
                            href="/cases"
                            className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-secondary-900"
                        >
                            Ver cases de sucesso
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 flex items-center justify-center gap-x-8 text-sm text-gray-400">
                        <div className="flex items-center gap-x-2">
                            <div className="h-2 w-2 rounded-full bg-green-400" />
                            <span>ROI médio de 300%</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div className="h-2 w-2 rounded-full bg-blue-400" />
                            <span>Implementação em 8-12 semanas</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div className="h-2 w-2 rounded-full bg-purple-400" />
                            <span>+50 clientes atendidos</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce-gentle">
                    <div className="h-6 w-0.5 bg-white/50 mx-auto" />
                    <div className="h-2 w-2 bg-white rounded-full mx-auto mt-1" />
                </div>
            </div>
        </section>
    )
}
