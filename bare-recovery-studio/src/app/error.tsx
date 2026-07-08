'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error('Application error:', error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg
                        className="w-12 h-12 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <h2 className="font-headline-lg text-4xl md:text-5xl mb-6">
                    Something went wrong
                </h2>
                <p className="text-on-surface-variant text-lg mb-10">
                    We encountered an unexpected error. Please try again or contact us if the problem persists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={reset} size="lg">
                        Try Again
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => (window.location.href = '/')}
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    )
}