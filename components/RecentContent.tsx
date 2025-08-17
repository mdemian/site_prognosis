'use client'

import Link from 'next/link'

export default function RecentContent() {
    const recentContent = [
        {
            title: 'Como sair do feeling e automatizar decisões com IA em 90 dias',
            category: 'Automação',
            readTime: '8 min',
            href: '/conteudos/automatizar-decisoes-ia-90-dias',
        },
        {
            title: 'S&OP prescritivo: do Excel à otimização em produção',
            category: 'S&OP',
            readTime: '12 min',
            href: '/conteudos/sop-prescritivo-excel-otimizacao',
        },
        {
            title: 'Roteirização inteligente: menos custo, mais OTIF',
            category: 'Logística',
            readTime: '10 min',
            href: '/conteudos/roteirizacao-inteligente-custo-otif',
        },
    ]

    const categories = [
        'Previsão',
        'S&OP',
        'Produção',
        'Logística',
        'Pricing',
        'Dados & Engenharia',
        'Casos de Uso',
    ]

    return (
        <section className="section">
            <div className="container-lg">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Conteúdos recentes
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Publicamos guias práticos, estudos aplicados e análises técnicas sobre
                        previsão, planejamento, otimização e automação de decisões.
                    </p>
                </div>

                {/* Categorias */}
                <div className="mx-auto max-w-4xl mb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <Link
                                key={category}
                                href={`/conteudos/categoria/${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Artigos recentes */}
                <div className="mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {recentContent.map((content) => (
                            <article key={content.title} className="card group hover:shadow-lg transition-all duration-300">
                                <div className="card-content">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                                            {content.category}
                                        </span>
                                        <span className="text-xs text-gray-500">{content.readTime}</span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-3">
                                        {content.title}
                                    </h3>

                                    <Link
                                        href={content.href}
                                        className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 group/link"
                                    >
                                        Ler artigo
                                        <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mx-auto max-w-2xl text-center mt-12">
                    <Link
                        href="/conteudos"
                        className="btn btn-outline"
                    >
                        Ver todos os conteúdos
                    </Link>
                </div>
            </div>
        </section>
    )
}


