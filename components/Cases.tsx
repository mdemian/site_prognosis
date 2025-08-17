'use client'

import Link from 'next/link'

const cases = [
    {
        title: 'Redução de 40% em estoque farmacêutico',
        client: 'Empresa Farmacêutica',
        industry: 'Farma & Saúde',
        challenge: 'Alto nível de estoque obsoleto e previsões imprecisas',
        solution: 'Implementação de ML para previsão de demanda com otimização de estoque',
        results: [
            'Redução de 40% no estoque total',
            'Aumento de 25% na acurácia de previsão',
            'ROI de 350% em 12 meses',
        ],
        href: '/cases/farmaceutica',
    },
    {
        title: 'Otimização de roteirização reduz custos em 25%',
        client: 'Distribuidora Nacional',
        industry: 'Logística',
        challenge: 'Custos logísticos elevados e entregas com atraso',
        solution: 'Algoritmo de otimização de rotas com restrições reais',
        results: [
            'Economia de 25% em combustível',
            'Redução de 30% nos atrasos',
            'Aumento de 20% na satisfação do cliente',
        ],
        href: '/cases/distribuidora',
    },
    {
        title: 'S&OP integrado aumenta OTIF em 35%',
        client: 'Manufatura Industrial',
        industry: 'Manufatura',
        challenge: 'Falta de alinhamento entre vendas e operações',
        solution: 'Plataforma S&OP com otimização matemática',
        results: [
            'Aumento de 35% no OTIF',
            'Redução de 20% em custos operacionais',
            'Visibilidade executiva em tempo real',
        ],
        href: '/cases/manufatura',
    },
]

export default function Cases() {
    return (
        <section className="section bg-gray-50">
            <div className="container-lg">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Cases de sucesso que{' '}
                        <span className="text-primary-600">inspiram resultados</span>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Conheça como nossas soluções transformaram operações reais e
                        geraram resultados mensuráveis para nossos clientes.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
                    {cases.map((caseStudy) => (
                        <div key={caseStudy.title} className="card group hover:shadow-lg transition-all duration-300">
                            <div className="card-content">
                                <div className="mb-4">
                                    <span className="badge badge-secondary text-xs">
                                        {caseStudy.industry}
                                    </span>
                                </div>

                                <h3 className="card-title text-lg group-hover:text-primary-600 transition-colors">
                                    {caseStudy.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    <strong>Cliente:</strong> {caseStudy.client}
                                </p>

                                <div className="mt-4 space-y-3">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Desafio</h4>
                                        <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Solução</h4>
                                        <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Resultados</h4>
                                        <ul className="mt-1 space-y-1">
                                            {caseStudy.results.map((result) => (
                                                <li key={result} className="flex items-center text-sm text-gray-600">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2" />
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <Link
                                    href={caseStudy.href}
                                    className="mt-6 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group/link"
                                >
                                    Ver case completo
                                    <span className="ml-1 text-sm transition-transform group-hover/link:translate-x-1">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-16 text-center">
                    <Link
                        href="/cases"
                        className="btn btn-outline btn-lg"
                    >
                        Ver todos os cases
                        <span className="ml-2 text-lg">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
