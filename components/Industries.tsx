'use client'

import Link from 'next/link'

export default function Industries() {
    const industries = [
        {
            name: 'Alimentos & Bebidas',
            description: 'Gestão de sazonalidade, validade e promoções; planejamento e distribuição em múltiplos canais.',
            cases: [
                'Previsão de sell-in/sell-out',
                'Alocação por restrição de shelf life',
                'Roteirização com entregas urbanas'
            ],
            color: 'from-green-500 to-green-600',
        },
        {
            name: 'Farma & Saúde',
            description: 'Alta criticidade de serviço e compliance.',
            cases: [
                'Previsão por molécula/apresentação',
                'Política de estoque por criticidade',
                'Alocação entre centros de distribuição/unidades de saúde'
            ],
            color: 'from-blue-500 to-blue-600',
        },
        {
            name: 'Bens de Consumo',
            description: 'Mix amplo e ciclos curtos.',
            cases: [
                'Clusterização por canal',
                'Previsão promocional',
                'Plano de produção tático'
            ],
            color: 'from-purple-500 to-purple-600',
        },
        {
            name: 'Papel & Celulose',
            description: 'Grandes lotes, cadeias longas.',
            cases: [
                'Programação de máquinas',
                'Otimização de cortes',
                'Janelas de expedição'
            ],
            color: 'from-orange-500 to-orange-600',
        },
        {
            name: 'Varejo & Logística',
            description: 'Volatilidade e SLAs agressivos.',
            cases: [
                'Demanda por loja/canal',
                'Reposição automática',
                'Roteirização com janelas apertadas'
            ],
            color: 'from-red-500 to-red-600',
        },
    ]

    return (
        <section className="section bg-gray-50">
            <div className="container-lg">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Indústrias
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Experiência comprovada em diferentes setores, adaptando nossas soluções
                        às particularidades de cada indústria.
                    </p>
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
                    {industries.map((industry) => (
                        <div key={industry.name} className="card group hover:shadow-lg transition-all duration-300">
                            <div className="card-content">
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center`}>
                                        <div className="w-6 h-6 bg-white rounded-full"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                            {industry.name}
                                        </h3>
                                        <p className="mt-2 text-gray-600">
                                            {industry.description}
                                        </p>

                                        <div className="mt-4">
                                            <p className="text-sm font-medium text-gray-700 mb-2">Casos típicos:</p>
                                            <div className="space-y-1">
                                                {industry.cases.map((case_) => (
                                                    <div key={case_} className="flex items-center text-sm text-gray-600">
                                                        <div className="h-1 w-1 rounded-full bg-primary-500 mr-2" />
                                                        {case_}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Link
                                            href={`/industrias/${industry.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                            className="mt-6 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group/link"
                                        >
                                            Ver cases do setor
                                            <span className="ml-1 text-sm transition-transform group-hover/link:translate-x-1">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


