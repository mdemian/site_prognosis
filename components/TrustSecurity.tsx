'use client'

import Link from 'next/link'

export default function TrustSecurity() {
    const trustPillars = [
        {
            title: 'Privacidade',
            description: 'Consentimento, finalidade clara, revogação simples',
            icon: 'privacy',
            color: 'from-blue-500 to-blue-600',
            features: [
                'Consentimento explícito e granular',
                'Finalidade clara e específica',
                'Revogação simples a qualquer momento',
                'Transparência total no uso dos dados'
            ]
        },
        {
            title: 'Segurança',
            description: 'TLS, controle de acesso, trilhas de auditoria',
            icon: 'security',
            color: 'from-green-500 to-green-600',
            features: [
                'Criptografia TLS em todas as comunicações',
                'Controle de acesso baseado em roles',
                'Trilhas de auditoria completas',
                'Monitoramento 24/7 de segurança'
            ]
        },
        {
            title: 'Transparência',
            description: 'Decisões explicáveis e versionadas',
            icon: 'transparency',
            color: 'from-purple-500 to-purple-600',
            features: [
                'Decisões explicáveis e rastreáveis',
                'Versionamento de todos os modelos',
                'Documentação completa dos processos',
                'Relatórios de compliance regulares'
            ]
        }
    ]

    return (
        <section className="section">
            <div className="container-lg">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        Confiança, LGPD e segurança
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Sua confiança é nossa prioridade. Trabalhamos com os mais altos padrões de segurança e privacidade.
                    </p>
                </div>

                {/* Trust Pillars */}
                <div className="mx-auto max-w-6xl mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {trustPillars.map((pillar) => (
                            <div key={pillar.title} className="group">
                                <div className="card h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="card-content">
                                        {/* Icon */}
                                        <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            {pillar.icon === 'privacy' && (
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                    ⊆
                                                </div>
                                            )}
                                            {pillar.icon === 'security' && (
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                    ⊂
                                                </div>
                                            )}
                                            {pillar.icon === 'transparency' && (
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                    ⊃
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-semibold text-gray-900 text-center mb-4 group-hover:text-primary-600 transition-colors">
                                            {pillar.title}
                                        </h3>

                                        <p className="text-gray-600 text-center mb-6">
                                            {pillar.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-3">
                                            {pillar.features.map((feature) => (
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
                </div>

                {/* Certifications and Compliance */}
                <div className="mx-auto max-w-4xl mb-12">
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Certificações e Compliance
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                                        <span className="text-sm text-gray-700">ISO 27001 - Gestão de Segurança da Informação</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                                        <span className="text-sm text-gray-700">LGPD - Lei Geral de Proteção de Dados</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                                        <span className="text-sm text-gray-700">SOC 2 Type II - Controles de Segurança</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                                        <span className="text-sm text-gray-700">DPO dedicado e acessível</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <div className="w-6 h-6 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Certificações ativas e monitoramento contínuo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mx-auto max-w-2xl text-center">
                    <Link
                        href="/legal/privacidade"
                        className="btn btn-outline btn-lg group"
                    >
                        Ver política de privacidade
                        <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    <p className="text-sm text-gray-500 mt-4">
                        Usamos seus dados apenas para responder e qualificar seu pedido.
                    </p>
                </div>
            </div>
        </section>
    )
}
