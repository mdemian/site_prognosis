'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Algo deu errado!
                </h2>
                <p className="text-gray-600 mb-6">
                    Ocorreu um erro inesperado. Por favor, tente novamente.
                </p>
                <button
                    onClick={reset}
                    className="btn btn-primary"
                >
                    Tentar novamente
                </button>
            </div>
        </div>
    )
}
