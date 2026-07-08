import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <h1 className="font-display text-9xl font-bold text-primary mb-4">404</h1>
                <h2 className="font-headline-lg text-4xl md:text-5xl mb-6">
                    Page Not Found
                </h2>
                <p className="text-on-surface-variant text-lg mb-10 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button size="lg" className="w-full sm:w-auto">
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/services">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            View Services
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}