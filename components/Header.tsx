'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
    { name: 'Soluções', href: '/solucoes' },
    { name: 'Indústrias', href: '/industrias' },
    { name: 'Cases', href: '/cases' },
    { name: 'Conteúdos', href: '/conteudos' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container-lg flex items-center justify-between py-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Prognosis</span>
                        <Image
                            src="/prognosis.svg"
                            alt="Prognosis Logo"
                            width={360}
                            height={116}
                            className="h-16 w-auto"
                            priority
                        />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Abrir menu"
                    >
                        <span className="sr-only">Abrir menu principal</span>
                        <span className="text-lg font-bold">☰</span>
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/contato"
                        className="btn btn-primary btn-sm"
                    >
                        Fale com Especialista
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
                <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Prognosis</span>
                            <Image
                                src="/prognosis.svg"
                                alt="Prognosis Logo"
                                width={280}
                                height={90}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Fechar menu"
                        >
                            <span className="sr-only">Fechar menu</span>
                            <span className="text-lg font-bold">✕</span>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/contato"
                                    className="btn btn-primary w-full"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Fale com Especialista
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
