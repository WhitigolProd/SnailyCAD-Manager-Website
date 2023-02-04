import Link from 'next/link';
import React from 'react';

export default function PageFooter() {
    return (
        <footer className="bg-gray-900/50 w-full">
            <div className="container max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav
                    className="-mx-5 -my-2 flex flex-wrap justify-center"
                    aria-label="Footer"
                >
                    <div className="px-5 py-2">
                        <Link
                            href="/"
                            className="text-base text-gray-400 hover:text-gray-300"
                        >
                            Home
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link
                            href="/about"
                            className="text-base text-gray-400 hover:text-gray-300"
                        >
                            About
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link
                            href="/download"
                            className="text-base text-gray-400 hover:text-gray-300"
                        >
                            Download
                        </Link>
                    </div>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">
                    &copy; {new Date().getFullYear()} Whitigol Web Design. All
                    rights reserved.
                </p>
                <span className="min-h-screen hidden"></span>
            </div>
        </footer>
    );
}
