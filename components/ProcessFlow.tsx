'use client'

import Link from 'next/link'

export default function ProcessFlow() {
    const steps = [
        {
            title: 'Dados',
            description: 'ERP/CRM/WMS, planilhas, documentos, sinais externos',
            icon: 'database',
            color: 'from-blue-500 to-blue-600',
        },
        {
            title: 'Modelagem',
            description: 'Previsão (estatística + ML) e simulação por restrições',
            icon: 'model',
            color: 'from-purple-500 to-purple-600',
        },
        {
            title: 'Cenários',
            description: 'Comparação "e se…?" com métricas alinhadas ao negócio',
            icon: 'scenarios',
            color: 'from-green-500 to-green-600',
        },
        {
            title: 'Otimização',
            description: 'Escolha prescritiva com restrições reais',
            icon: 'optimize',
            color: 'from-orange-500 to-orange-600',
        },
        {
            title: 'Automação',
            description: 'Decisões recorrentes integradas ao seu fluxo',
            icon: 'automate',
            color: 'from-red-500 to-red-600',
        },
        {
            title: 'Monitoramento',
            description: 'KPIs, re-treino, melhoria contínua',
            icon: 'monitor',
            color: 'from-indigo-500 to-indigo-600',
        },
    ]

    return (
        <section className="section bg-gray-50">
            <div className="container-lg">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        Como funciona
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Do dado à decisão: nosso processo completo de transformação digital.
                    </p>
                </div>

                {/* Process Flow */}
                <div className="mx-auto max-w-6xl">
                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 transform -translate-y-1/2 z-0 hidden lg:block" />

                        {/* Steps */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                            {steps.map((step, index) => (
                                <div key={step.title} className="text-center group">
                                    {/* Step Circle */}
                                    <div className="relative mb-6">
                                        <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {step.icon === 'database' && (
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                    ∪
                                                </div>
                                            )}
                                            {step.icon === 'model' && (
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                    ƒ
                                                </div>
                                            )}
                                            {step.icon === 'scenarios' && (
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                    ∩
                                                </div>
                                            )}
                                            {step.icon === 'optimize' && (
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                    ∂
                                                </div>
                                            )}
                                            {step.icon === 'automate' && (
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                    ∀
                                                </div>
                                            )}
                                            {step.icon === 'monitor' && (
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                    ∈
                                                </div>
                                            )}
                                        </div>

                                        {/* Step Number */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold text-primary-600">{index + 1}</span>
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mx-auto max-w-2xl text-center mt-16">
                    <Link
                        href="/contato"
                        className="btn btn-primary btn-lg group"
                    >
                        Explorar etapas
                        <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
