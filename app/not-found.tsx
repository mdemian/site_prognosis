import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Página não encontrada
                </h2>
                <p className="text-gray-600 mb-6">
                    A página que você está procurando não existe ou foi movida.
                </p>
                <Link
                    href="/"
                    className="btn btn-primary"
                >
                    Voltar ao início
                </Link>
            </div>
        </div>
    )
}
