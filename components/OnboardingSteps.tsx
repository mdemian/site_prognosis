'use client'

import Link from 'next/link'

export default function OnboardingSteps() {
    const steps = [
        {
            title: 'Diagnóstico',
            duration: '1–2 semanas',
            description: 'Entender metas, dados e rotinas',
            activities: [
                'Workshop de descoberta',
                'Análise de dados existentes',
                'Mapeamento de processos',
                'Definição de KPIs'
            ],
            color: 'from-blue-500 to-blue-600',
            icon: 'diagnose'
        },
        {
            title: 'Prova de valor',
            duration: '4–6 semanas',
            description: 'Modelo mínimo + cenários + ganhos estimados',
            activities: [
                'Desenvolvimento do MVP',
                'Teste com dados reais',
                'Validação de cenários',
                'Estimativa de ROI'
            ],
            color: 'from-green-500 to-green-600',
            icon: 'value'
        },
        {
            title: 'Operação',
            duration: 'Contínua',
            description: 'Integração, automação e monitoramento de KPIs',
            activities: [
                'Integração com sistemas',
                'Automação de decisões',
                'Monitoramento contínuo',
                'Melhoria iterativa'
            ],
            color: 'from-purple-500 to-purple-600',
            icon: 'operate'
        }
    ]

    return (
        <section className="section bg-gray-50">
            <div className="container-lg">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        Como começamos
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Onboarding em 3 passos: do diagnóstico à operação contínua.
                    </p>
                </div>

                {/* Steps */}
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={step.title} className="group">
                                <div className="card h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="card-content">
                                        {/* Step Header */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                {step.icon === 'diagnose' && (
                                                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                        ∃
                                                    </div>
                                                )}
                                                {step.icon === 'value' && (
                                                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                        ≈
                                                    </div>
                                                )}
                                                {step.icon === 'operate' && (
                                                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                        ≡
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="text-sm text-primary-600 font-medium">
                                                    {step.duration}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-6">
                                            {step.description}
                                        </p>

                                        {/* Activities */}
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                                Atividades principais:
                                            </h4>
                                            {step.activities.map((activity) => (
                                                <div key={activity} className="flex items-start">
                                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{activity}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Step Number */}
                                        <div className="mt-6 flex justify-between items-center">
                                            <div className="text-sm text-gray-500">
                                                Passo {index + 1} de {steps.length}
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className="hidden lg:block">
                                                    <div className="w-8 h-0.5 bg-primary-300" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Connection Lines (Desktop) */}
                <div className="hidden lg:block mx-auto max-w-6xl mt-8">
                    <div className="flex justify-center">
                        <div className="w-1/3 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500" />
                        <div className="w-1/3 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600" />
                    </div>
                </div>

                {/* CTA */}
                <div className="mx-auto max-w-2xl text-center mt-16">
                    <Link
                        href="/contato"
                        className="btn btn-primary btn-lg group"
                    >
                        Agendar diagnóstico
                        <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    <p className="text-sm text-gray-500 mt-4">
                        Em 10 dias úteis você terá cenários e estimativas.
                    </p>
                </div>
            </div>
        </section>
    )
}
