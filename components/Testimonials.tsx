'use client'



const testimonials = [
    {
        content: "A implementação da Prognosis transformou nossa capacidade de previsão. Reduzimos o WAPE em 35% e melhoramos significativamente nosso planejamento de estoque.",
        author: {
            name: "Maria Silva",
            title: "Diretora de Supply Chain",
            company: "Empresa Farmacêutica",
        },
        rating: 5,
    },
    {
        content: "O S&OP integrado nos deu visibilidade completa das operações. Conseguimos alinhar vendas e produção como nunca antes, resultando em aumento de 30% no OTIF.",
        author: {
            name: "João Santos",
            title: "VP de Operações",
            company: "Manufatura Industrial",
        },
        rating: 5,
    },
    {
        content: "A otimização de rotas nos trouxe economia real de 25% em combustível e melhorou nossa pontualidade nas entregas. ROI excepcional em apenas 6 meses.",
        author: {
            name: "Ana Costa",
            title: "Gerente de Logística",
            company: "Distribuidora Nacional",
        },
        rating: 5,
    },
]

export default function Testimonials() {
    return (
        <section className="section">
            <div className="container-lg">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        O que nossos{' '}
                        <span className="text-primary-600">clientes dizem</span>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Depoimentos reais de executivos que transformaram suas operações
                        com nossas soluções de Advanced Analytics.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card">
                            <div className="card-content">
                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-gray-900">
                                    <p className="text-lg leading-relaxed">
                                        "{testimonial.content}"
                                    </p>
                                </blockquote>

                                {/* Author */}
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                                            <span className="text-primary-600 font-semibold">
                                                {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-semibold text-gray-900">
                                            {testimonial.author.name}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.author.title}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.author.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="rounded-2xl bg-gray-50 p-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-600">50+</div>
                                <div className="text-sm text-gray-600">Clientes atendidos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-600">4.9/5</div>
                                <div className="text-sm text-gray-600">Satisfação média</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-600">300%</div>
                                <div className="text-sm text-gray-600">ROI médio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
