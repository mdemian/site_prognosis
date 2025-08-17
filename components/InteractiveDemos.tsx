'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function InteractiveDemos() {
    const [activeDemo, setActiveDemo] = useState(0)

    const demos = [
        {
            id: 'demo-a',
            title: 'Do Excel à previsão confiável',
            subtitle: 'Transforme planilhas em previsões precisas',
            input: 'Planilha de vendas + calendário promocional',
            process: [
                'Limpeza e preparação dos dados',
                'Modelos híbridos (estatística + ML)',
                'Validação cruzada e ajustes'
            ],
            output: 'Previsão por produto/canal + intervalo de confiança + WAPE',
            action: 'Baixar exemplo de relatório',
            color: 'from-blue-500 to-blue-600',
            icon: 'chart'
        },
        {
            id: 'demo-b',
            title: 'Otimização de produção/rota',
            subtitle: 'Maximize eficiência com restrições reais',
            input: 'Restrições (capacidade, janelas, custos)',
            process: [
                'Simulação de cenários múltiplos',
                'Otimizador (LP/MIP/heurísticas)',
                'Análise de sensibilidade'
            ],
            output: 'Plano otimizado com ganhos estimados (prazo, custo, OTIF)',
            action: 'Simular meu caso',
            color: 'from-green-500 to-green-600',
            icon: 'rocket'
        },
        {
            id: 'demo-c',
            title: 'Leitura de rotinas/documentos',
            subtitle: 'Descubra insights ocultos nos processos',
            input: 'Checklist das rotinas, SOPs, relatórios e e-mails',
            process: [
                'Mineração de processos e fluxos',
                'Análise textual e semântica',
                'Identificação de padrões'
            ],
            output: 'Mapa de gargalos, riscos antecipados e oportunidades de automação',
            action: 'Receber diagnóstico em 48h',
            color: 'from-purple-500 to-purple-600',
            icon: 'document'
        }
    ]

    return (
        <section id="demo" className="section">
            <div className="container-lg">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        Veja na prática
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Três mini-demonstrações que mostram como transformamos seus dados em decisões inteligentes.
                    </p>
                </div>

                {/* Demo Navigation */}
                <div className="mx-auto max-w-4xl mb-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {demos.map((demo, index) => (
                            <button
                                key={demo.id}
                                onClick={() => setActiveDemo(index)}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeDemo === index
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {demo.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Demo */}
                <div className="mx-auto max-w-6xl">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Demo Content */}
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${demos[activeDemo].color} flex items-center justify-center`}>
                                        {demos[activeDemo].icon === 'chart' && (
                                            <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-sm math-symbol">
                                                ∑
                                            </div>
                                        )}
                                        {demos[activeDemo].icon === 'rocket' && (
                                            <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-sm math-symbol">
                                                ↑
                                            </div>
                                        )}
                                        {demos[activeDemo].icon === 'document' && (
                                            <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-sm math-symbol">
                                                ⊂
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {demos[activeDemo].title}
                                        </h3>
                                        <p className="text-gray-600">{demos[activeDemo].subtitle}</p>
                                    </div>
                                </div>

                                {/* Process Flow */}
                                <div className="space-y-6">
                                    {/* Input */}
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <h4 className="text-sm font-semibold text-blue-900 mb-2">Entrada</h4>
                                        <p className="text-blue-800">{demos[activeDemo].input}</p>
                                    </div>

                                    {/* Process */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Processo</h4>
                                        <div className="space-y-2">
                                            {demos[activeDemo].process.map((step, index) => (
                                                <div key={index} className="flex items-center">
                                                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                                                        {index + 1}
                                                    </div>
                                                    <span className="text-gray-700">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Output */}
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <h4 className="text-sm font-semibold text-green-900 mb-2">Saída</h4>
                                        <p className="text-green-800">{demos[activeDemo].output}</p>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="mt-8">
                                    <Link
                                        href="/contato"
                                        className={`btn btn-lg w-full bg-gradient-to-r ${demos[activeDemo].color} text-white hover:shadow-lg transition-all duration-300`}
                                    >
                                        {demos[activeDemo].action}
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Demo */}
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
                                <div className="text-center">
                                    <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${demos[activeDemo].color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                                        {demos[activeDemo].icon === 'chart' && (
                                            <div className="w-16 h-16 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-2xl math-symbol">
                                                ∑
                                            </div>
                                        )}
                                        {demos[activeDemo].icon === 'rocket' && (
                                            <div className="w-16 h-16 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-2xl math-symbol">
                                                ↑
                                            </div>
                                        )}
                                        {demos[activeDemo].icon === 'document' && (
                                            <div className="w-16 h-16 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-2xl math-symbol">
                                                ⊂
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        Demonstração Interativa
                                    </h4>
                                    <p className="text-gray-600 mb-6">
                                        Clique no botão para ver uma demonstração personalizada
                                    </p>
                                    <button className="btn btn-outline">
                                        Iniciar Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mx-auto max-w-2xl text-center mt-12">
                    <Link
                        href="/contato"
                        className="btn btn-primary btn-lg group"
                    >
                        Quero ver meu cenário
                        <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    <p className="text-sm text-gray-500 mt-4">
                        Sem cadastro. Exemplos reais, em 2 minutos.
                    </p>
                </div>
            </div>
        </section>
    )
}
