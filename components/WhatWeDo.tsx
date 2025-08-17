'use client'

export default function WhatWeDo() {
    const valueDelivery = [
        {
            title: 'Diagnosticar',
            description: 'Entendemos objetivos, restrições e métricas críticas.',
            color: 'from-blue-500 to-blue-600',
        },
        {
            title: 'Modelar',
            description: 'Construímos previsões, simulações e modelos de otimização.',
            color: 'from-green-500 to-green-600',
        },
        {
            title: 'Operar',
            description: 'Integramos decisões ao seu fluxo (S&OP, PCP, logística, pricing).',
            color: 'from-purple-500 to-purple-600',
        },
        {
            title: 'Automatizar',
            description: 'Orquestramos decisões recorrentes com regras e IA.',
            color: 'from-orange-500 to-orange-600',
        },
        {
            title: 'Monitorar e aprender',
            description: 'Medimos KPIs, re-treinamos modelos e melhoramos continuamente.',
            color: 'from-red-500 to-red-600',
        },
    ]

    const highlights = [
        'Previsão de demanda com combinação de algoritmos e sinais externos.',
        'Planejamento tático (S&OP) orientado por cenários.',
        'Otimização de produção e capacidade para cumprir prazos com menor custo.',
        'Roteirização e alocação para reduzir quilômetros e janelas perdidas.',
        'Precificação e revenue com simulação de elasticidade e regras de margem.',
    ]

    const sectors = [
        'Alimentos & Bebidas',
        'Farma & Saúde',
        'Bens de Consumo',
        'Papel & Celulose',
        'Varejo & Logística',
    ]

    return (
        <section className="section">
            <div className="container-lg">
                {/* O que fazemos */}
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        O que fazemos
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        A PROGNOSIS ajuda empresas a resolver problemas reais, automatizar decisões e processos,
                        e projetar cenários com base em dados. Combinamos modelos estatísticos, machine learning
                        e otimização matemática para reduzir incerteza, elevar produtividade e acelerar resultados.
                    </p>
                </div>

                {/* Como entregamos valor */}
                <div className="mx-auto max-w-6xl mb-16">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12">
                        Como entregamos valor
                    </h3>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                        {valueDelivery.map((item, index) => (
                            <div key={item.title} className="text-center">
                                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                                    <span className="text-white font-bold text-xl">{index + 1}</span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Destaques */}
                <div className="mx-auto max-w-4xl mb-16">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
                        Destaques
                    </h3>
                    <div className="space-y-4">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <p className="text-gray-700">{highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Setores atendidos */}
                <div className="mx-auto max-w-4xl text-center">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                        Setores atendidos
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {sectors.map((sector) => (
                            <span
                                key={sector}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                                {sector}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


