'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function InteractiveHero() {
    const [currentStep, setCurrentStep] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const steps = [
        {
            title: 'Dados',
            description: 'ERP, CRM, planilhas, documentos',
            icon: 'data',
            color: 'from-blue-500 to-blue-600',
        },
        {
            title: 'Modelos',
            description: 'IA, estatística, otimização',
            icon: 'brain',
            color: 'from-purple-500 to-purple-600',
        },
        {
            title: 'Decisões',
            description: 'Automatizadas e otimizadas',
            icon: 'lightning',
            color: 'from-green-500 to-green-600',
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentStep((prev) => (prev + 1) % steps.length)
                setIsAnimating(false)
            }, 300)
        }, 3000)

        return () => clearInterval(interval)
    }, [steps.length])

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="relative container-lg section-lg">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Decisões melhores,{' '}
                                <span className="text-primary-400">todos os dias</span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
                                Usamos IA, matemática e estatística para prever cenários, otimizar recursos
                                e automatizar rotinas críticas — com resultados medidos em KPIs de negócio.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link
                                    href="/contato"
                                    className="btn btn-primary btn-lg group w-full sm:w-auto"
                                >
                                    Falar com um especialista
                                    <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                                </Link>

                                <Link
                                    href="#demo"
                                    className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-secondary-900 w-full sm:w-auto"
                                >
                                    Ver na prática (2 min)
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-400" />
                                    <span>ROI médio de 300%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                                    <span>Implementação em 8-12 semanas</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                                    <span>+50 clientes atendidos</span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Animation */}
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-semibold text-white text-center mb-8">
                                    Como transformamos dados em decisões
                                </h3>

                                <div className="relative">
                                    {/* Flow arrows */}
                                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent transform -translate-y-1/2 z-0" />

                                    {/* Steps */}
                                    <div className="relative z-10 flex justify-between items-center">
                                        {steps.map((step, index) => (
                                            <div
                                                key={step.title}
                                                className={`flex flex-col items-center transition-all duration-500 ${index === currentStep ? 'scale-110' : 'scale-90 opacity-60'
                                                    }`}
                                            >
                                                <div
                                                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 shadow-lg ${index === currentStep ? 'animate-pulse' : ''
                                                        }`}
                                                >
                                                    {step.icon === 'data' && (
                                                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                            Σ
                                                        </div>
                                                    )}
                                                    {step.icon === 'brain' && (
                                                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                            ∫
                                                        </div>
                                                    )}
                                                    {step.icon === 'lightning' && (
                                                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-gray-800 font-bold text-lg math-symbol">
                                                            ∇
                                                        </div>
                                                    )}
                                                </div>
                                                <h4 className="text-lg font-semibold text-white text-center">
                                                    {step.title}
                                                </h4>
                                                <p className="text-sm text-gray-300 text-center mt-1">
                                                    {step.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Animated data flow */}
                                    <div className="absolute top-1/2 left-4 right-4 h-1 bg-primary-400/30 transform -translate-y-1/2 overflow-hidden">
                                        <div
                                            className={`h-full bg-primary-400 transition-all duration-1000 ${isAnimating ? 'w-full' : 'w-0'
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Current step indicator */}
                                <div className="mt-8 text-center">
                                    <div className="flex justify-center gap-2">
                                        {steps.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentStep
                                                    ? 'bg-primary-400'
                                                    : 'bg-gray-500'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-300 mt-2">
                                        Passo {currentStep + 1} de {steps.length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce-gentle">
                    <div className="h-6 w-0.5 bg-white/50 mx-auto" />
                    <div className="h-2 w-2 bg-white rounded-full mx-auto mt-1" />
                </div>
            </div>
        </section>
    )
}
