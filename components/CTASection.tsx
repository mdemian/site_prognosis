'use client'

import { useState } from 'react'

const benefits = [
    'Diagnóstico gratuito em 30 minutos',
    'Análise personalizada do seu caso',
    'Proposta customizada em 48h',
    'Sem compromisso',
]

export default function CTASection() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        consent: false,
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui seria a integração com HubSpot
        console.log('Form submitted:', formData)
        setIsSubmitted(true)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    if (isSubmitted) {
        return (
            <section className="section bg-gradient-to-r from-primary-500 to-primary-600">
                <div className="container-lg text-center">
                    <div className="mx-auto max-w-2xl">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white">
                            <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                        </div>
                        <h2 className="mt-6 text-3xl font-bold text-white">
                            Obrigado pelo interesse!
                        </h2>
                        <p className="mt-4 text-lg text-primary-100">
                            Nossa equipe entrará em contato em até 2 horas para agendar
                            seu diagnóstico gratuito.
                        </p>
                        <div className="mt-8">
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600"
                            >
                                Enviar outro formulário
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section bg-gradient-to-r from-primary-500 to-primary-600">
            <div className="container-lg">
                <div className="mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Content */}
                        <div className="text-white">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Pronto para transformar sua{' '}
                                <span className="text-primary-200">rotina, área ou empresa?</span>
                            </h2>
                            <p className="mt-6 text-lg text-primary-100">
                                Agende um diagnóstico gratuito com nossos especialistas e descubra
                                como podemos otimizar suas operações com Advanced Analytics.
                            </p>

                            <div className="mt-8 space-y-4">
                                {benefits.map((benefit) => (
                                    <div key={benefit} className="flex items-center">
                                        <div className="w-4 h-4 bg-primary-200 rounded-full mr-3"></div>
                                        <span className="text-primary-100">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 rounded-2xl bg-white/10 p-6">
                                <h3 className="text-lg font-semibold text-white">
                                    O que você receberá:
                                </h3>
                                <ul className="mt-4 space-y-2 text-sm text-primary-100">
                                    <li>• Análise detalhada dos seus desafios atuais</li>
                                    <li>• Estimativa de ROI para suas operações</li>
                                    <li>• Roadmap de implementação personalizado</li>
                                    <li>• Demonstração das soluções relevantes</li>
                                </ul>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900">
                                Agendar diagnóstico gratuito
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Preencha o formulário e nossa equipe entrará em contato em até 2 horas.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Nome completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="input mt-1"
                                        placeholder="Seu nome completo"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email corporativo *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="input mt-1"
                                        placeholder="seu.email@empresa.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                        Empresa *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="input mt-1"
                                        placeholder="Nome da sua empresa"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Telefone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="input mt-1"
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>

                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        name="consent"
                                        required
                                        checked={formData.consent}
                                        onChange={handleInputChange}
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                                    />
                                    <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                                        Concordo em receber comunicações da Prognosis sobre soluções de
                                        supply chain e analytics. Posso cancelar a qualquer momento. *
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full btn-lg group"
                                >
                                    Agendar diagnóstico gratuito
                                    <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    * Campos obrigatórios. Seus dados estão seguros e não serão compartilhados.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
