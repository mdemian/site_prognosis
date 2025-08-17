'use client'

import Link from 'next/link'

export default function ResultsTable() {
    const results = [
        {
            area: 'Previsão (WAPE)',
            antes: '25–35%',
            depois: '10–18%',
            melhoria: '↓ 40-50%',
            color: 'text-green-600',
        },
        {
            area: 'OTIF',
            antes: '85–90%',
            depois: '95–98%',
            melhoria: '↑ 5-13%',
            color: 'text-blue-600',
        },
        {
            area: 'Custo logístico / pedido',
            antes: 'Baseline',
            depois: '↓ 8–15%',
            melhoria: '↓ 8-15%',
            color: 'text-purple-600',
        },
        {
            area: 'Estoque (dias)',
            antes: 'Baseline',
            depois: '↓ 10–20%',
            melhoria: '↓ 10-20%',
            color: 'text-orange-600',
        },
    ]

    return (
        <section className="section">
            <div className="container-lg">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        Resultados que medimos
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Prova orientada a valor: transformações reais em KPIs de negócio.
                    </p>
                </div>

                {/* Results Table */}
                <div className="mx-auto max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Table Header */}
                        <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                            <div className="grid grid-cols-4 gap-4 text-white font-semibold">
                                <div>Área</div>
                                <div className="text-center">Antes</div>
                                <div className="text-center">Depois (típico)</div>
                                <div className="text-center">Melhoria</div>
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-gray-200">
                            {results.map((result, index) => (
                                <div key={result.area} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                    <div className="grid grid-cols-4 gap-4 items-center">
                                        <div className="font-medium text-gray-900">
                                            {result.area}
                                        </div>
                                        <div className="text-center text-gray-600">
                                            {result.antes}
                                        </div>
                                        <div className="text-center font-semibold text-gray-900">
                                            {result.depois}
                                        </div>
                                        <div className={`text-center font-bold ${result.color}`}>
                                            {result.melhoria}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Table Footer */}
                        <div className="bg-gray-50 px-6 py-4">
                            <p className="text-sm text-gray-600 text-center">
                                <strong>Nota:</strong> Resultados variam por setor, maturidade e qualidade dos dados.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mx-auto max-w-4xl mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                            <div className="text-sm text-gray-600">Clientes com resultados comprovados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-2">300%</div>
                            <div className="text-sm text-gray-600">ROI médio em 12 meses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-2">8-12</div>
                            <div className="text-sm text-gray-600">Semanas para primeiro resultado</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mx-auto max-w-2xl text-center mt-12">
                    <Link
                        href="/contato"
                        className="btn btn-primary btn-lg group"
                    >
                        Pedir estimativa para meu caso
                        <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    <p className="text-sm text-gray-500 mt-4">
                        Informe 3 dados e receba o cenário inicial.
                    </p>
                </div>
            </div>
        </section>
    )
}


