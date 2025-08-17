import Link from 'next/link'
import Image from 'next/image'

const navigation = {
    solutions: [
        { name: 'Previsão de Demanda', href: '/solucoes/previsao-demanda' },
        { name: 'Planejamento Tático & S&OP', href: '/solucoes/planejamento-tatico' },
        { name: 'Otimização de Produção', href: '/solucoes/otimizacao-producao' },
        { name: 'Roteirização & Alocação', href: '/solucoes/roteirizacao' },
    ],
    company: [
        { name: 'Sobre', href: '/sobre' },
        { name: 'Cases', href: '/cases' },
        { name: 'Blog', href: '/conteudos' },
        { name: 'Carreiras', href: '/carreiras' },
    ],
    resources: [
        { name: 'Calculadora ROI', href: '/recursos/calculadora-roi' },
        { name: 'Assessment de Maturidade', href: '/recursos/assessment' },
        { name: 'Webinars', href: '/conteudos/webinars' },
        { name: 'Materiais Ricos', href: '/recursos' },
    ],
    legal: [
        { name: 'Política de Privacidade', href: '/legal/privacidade' },
        { name: 'Termos de Uso', href: '/legal/termos' },
        { name: 'LGPD', href: '/legal/lgpd' },
    ],
    social: [
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/company/prognosis',
            icon: (props: any) => (
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            ),
        },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-secondary-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="container-lg py-12">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Image
                            src="/prognosis.svg"
                            alt="Prognosis"
                            width={360}
                            height={116}
                            className="h-16 w-auto brightness-0 invert"
                        />
                        <p className="text-sm leading-6 text-gray-300">
                            Transformamos dados em decisões estratégicas através de Advanced Analytics
                            e Operations Research para otimizar supply chains.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-500 hover:text-gray-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Soluções</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Recursos</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.resources.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-xs leading-5 text-gray-400">
                            &copy; 2024 Prognosis. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center space-x-6 text-xs text-gray-400">
                            <span>CNPJ: 00.000.000/0001-00</span>
                            <span>contato@prognosis.com.br</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
