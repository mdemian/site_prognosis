'use client'

import Link from 'next/link'

const solutions = [
    {
        name: 'Previsão de Demanda (IA + Estatística)',
        description: 'Para quê: reduzir rupturas e estoques excedentes, planejar produção e compras com segurança.',
        href: '/solucoes/previsao-demanda',
        benefits: [
            'Modelos híbridos (clássicos + ML)',
            'Tratamento de promoções e sazonalidade',
            'Explicabilidade dos drivers',
            'Monitoramento de erro'
        ],
        kpis: 'Acurácia (WAPE/MAE/MAPE), OTIF, giro, cobertura, ruptura',
        cta: 'Solicitar diagnóstico de previsão',
        color: 'from-blue-500 to-blue-600',
    },
    {
        name: 'Planejamento Tático & S&OP por Cenários',
        description: 'Para quê: alinhar vendas, operações e finanças, simulando demanda, restrições e políticas de estoque.',
        href: '/solucoes/planejamento-tatico',
        benefits: [
            'Simulador de cenários (demanda, capacidade, SLAs)',
            'Políticas ótimas de reposição',
            'Plano consensado'
        ],
        kpis: 'Atendimento, custo total, capital empatado, aderência ao plano',
        cta: 'Ver exemplo de plano tático',
        color: 'from-green-500 to-green-600',
    },
    {
        name: 'Otimização de Produção & Capacidade (APS)',
        description: 'Para quê: sequenciar ordens, respeitar setups e gargalos, cumprir prazos com menor custo.',
        href: '/solucoes/otimizacao-producao',
        benefits: [
            'Modelo de programação (LP/MIP/heurísticas)',
            'Agenda de máquinas',
            'Análise de "what-if"'
        ],
        kpis: 'Cumprimento de prazos, utilização, OEE, estoques intermediários',
        cta: 'Agendar demonstração',
        color: 'from-purple-500 to-purple-600',
    },
    {
        name: 'Roteirização & Alocação (Logística)',
        description: 'Para quê: reduzir distância e janelas perdidas, melhorar nível de serviço.',
        href: '/solucoes/roteirizacao',
        benefits: [
            'Roteirização com janelas de entrega',
            'Frota heterogênea e múltiplos depósitos',
            'Alocação de pedidos por capacidade'
        ],
        kpis: 'Custo por entrega, quilometragem, OTIF, utilização da frota',
        cta: 'Simular minha operação',
        color: 'from-orange-500 to-orange-600',
    },
    {
        name: 'Precificação & Revenue',
        description: 'Para quê: proteger margem e capturar receita com governança.',
        href: '/solucoes/precificacao',
        benefits: [
            'Elasticidade estimada',
            'Regras, simulações e faixas de preço',
            'Por canal/segmento'
        ],
        kpis: 'Margem, volume, receita, canibalização controlada',
        cta: 'Conversar com especialista em pricing',
        color: 'from-red-500 to-red-600',
    },
]

export default function Solutions() {
    return (
        <section className="section">
            <div className="container-lg">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Soluções que{' '}
                        <span className="text-primary-600">transformam operações</span>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Nossa plataforma integra Advanced Analytics e Operations Research para
                        resolver os desafios mais críticos da supply chain.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
                    {solutions.map((solution) => (
                        <div key={solution.name} className="card group hover:shadow-lg transition-all duration-300">
                            <div className="card-content">
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center`}>
                                        <div className="w-6 h-6 bg-white rounded-full"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                            {solution.name}
                                        </h3>
                                        <p className="mt-2 text-gray-600">
                                            {solution.description}
                                        </p>

                                        <div className="mt-4 space-y-2">
                                            {solution.benefits.map((benefit) => (
                                                <div key={benefit} className="flex items-center text-sm text-gray-600">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2" />
                                                    {benefit}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                            <p className="text-xs font-medium text-gray-700 mb-1">KPIs acompanhados:</p>
                                            <p className="text-sm text-gray-600">{solution.kpis}</p>
                                        </div>

                                        <Link
                                            href={solution.href}
                                            className="mt-6 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group/link"
                                        >
                                            {solution.cta}
                                            <span className="ml-1 text-sm transition-transform group-hover/link:translate-x-1">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-16 max-w-2xl text-center">
                    <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-white">
                        <h3 className="text-xl font-semibold">
                            Precisa de uma solução personalizada?
                        </h3>
                        <p className="mt-2 text-primary-100">
                            Nossa equipe de especialistas pode desenvolver soluções sob medida
                            para seus desafios específicos.
                        </p>
                        <Link
                            href="/contato"
                            className="mt-4 btn btn-outline btn-sm border-white text-white hover:bg-white hover:text-primary-600"
                        >
                            Falar com especialista
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
