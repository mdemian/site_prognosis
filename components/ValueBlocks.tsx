'use client'

import Link from 'next/link'

export default function ValueBlocks() {
    const valueBlocks = [
        {
            title: 'Cenários de predição e otimização',
            description: 'Transformamos seus dados em cenários comparáveis (previsão + simulação + otimização) para suportar a tomada de decisão com trade-offs claros.',
            icon: 'target',
            color: 'from-blue-500 to-blue-600',
            features: [
                'Previsão de demanda com intervalos de confiança',
                'Simulação de cenários "e se..."',
                'Otimização com restrições reais',
                'Trade-offs visuais e quantificados'
            ]
        },
        {
            title: 'Avaliação das rotinas e documentos',
            description: 'Analisamos rotinas, documentos e insumos usados por quem decide — para antever riscos, oportunidades e padrões que ainda não estão visíveis.',
            icon: 'search',
            color: 'from-purple-500 to-purple-600',
            features: [
                'Análise de processos e rotinas',
                'Mineração de documentos e e-mails',
                'Identificação de gargalos ocultos',
                'Mapa de oportunidades de automação'
            ]
        },
        {
            title: 'Automação de decisões',
            description: 'Orquestramos decisões recorrentes (S&OP, produção, logística, pricing) com regras e modelos — menos retrabalho, mais consistência.',
            icon: 'automation',
            color: 'from-green-500 to-green-600',
            features: [
                'Decisões recorrentes automatizadas',
                'Integração com fluxos existentes',
                'Regras de negócio configuráveis',
                'Monitoramento contínuo de performance'
            ]
        }
    ]

    return (
        <section className="section bg-gray-50">
            <div className="container-lg">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        O que fazemos em 20 segundos
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Três pilares que transformam sua operação em decisões inteligentes e automatizadas.
                    </p>
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
                    {valueBlocks.map((block, index) => (
                        <div key={block.title} className="group">
                            <div className="card h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="card-content">
                                    {/* Icon */}
                                    <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${block.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {block.icon === 'target' && (
                                            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                →
                                            </div>
                                        )}
                                        {block.icon === 'search' && (
                                            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                ∃
                                            </div>
                                        )}
                                        {block.icon === 'automation' && (
                                            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                ∞
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-4 group-hover:text-primary-600 transition-colors">
                                        {block.title}
                                    </h3>

                                    <p className="text-gray-600 text-center mb-6">
                                        {block.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-3">
                                        {block.features.map((feature) => (
                                            <div key={feature} className="flex items-start">
                                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mx-auto max-w-2xl text-center mt-12">
                    <Link
                        href="#demo"
                        className="btn btn-primary btn-lg group"
                    >
                        Ver exemplos práticos
                        <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
