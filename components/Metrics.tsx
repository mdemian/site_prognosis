'use client'



const metrics = [
    {
        name: 'Redução WAPE',
        value: '30%',
        description: 'Erro médio de previsão',
        color: 'text-green-600',
        bgColor: 'bg-green-100',
    },
    {
        name: 'Aumento OTIF',
        value: '25%',
        description: 'On-time in-full delivery',
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
    },
    {
        name: 'Time-to-Value',
        value: '8-12',
        description: 'Semanas para implementação',
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
    },
    {
        name: 'ROI Médio',
        value: '300%',
        description: 'Retorno sobre investimento',
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
    },
]

export default function Metrics() {
    return (
        <section className="section bg-gray-50">
            <div className="container-lg">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Resultados comprovados em{' '}
                        <span className="text-primary-600">supply chains reais</span>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Nossas soluções já impactaram mais de 50 empresas, gerando resultados
                        mensuráveis e sustentáveis.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {metrics.map((metric) => (
                        <div key={metric.name} className="card text-center">
                            <div className="card-content">
                                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-lg ${metric.bgColor}`}>
                                    <div className={`w-6 h-6 rounded-full ${metric.color.replace('text-', 'bg-')}`}></div>
                                </div>
                                <h3 className="mt-4 text-2xl font-bold text-gray-900">{metric.value}</h3>
                                <p className="mt-2 text-sm font-semibold text-gray-900">{metric.name}</p>
                                <p className="mt-1 text-sm text-gray-600">{metric.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional context */}
                <div className="mx-auto mt-16 max-w-3xl text-center">
                    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Baseado em dados de clientes reais
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Estes resultados são baseados em implementações reais em empresas de
                            diferentes setores e portes, com acompanhamento contínuo de performance.
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-x-4 text-xs text-gray-500">
                            <span>• Manufatura</span>
                            <span>• Varejo</span>
                            <span>• Farma & Saúde</span>
                            <span>• Logística</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
