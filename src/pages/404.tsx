'use client';
import React from 'react';
import {
    useSSR,
    createTheme,
    NextUIProvider,
    Loading,
} from '@nextui-org/react';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button } from '@mui/joy';
import Link from 'next/link';

const theme = createTheme({
    type: 'dark',
});

export default function NotFoundPage() {
    const { isBrowser } = useSSR();
    return (
        <>
            {isBrowser ? (
                <CssVarsProvider>
                    <NextUIProvider theme={theme}>
                        <section
                            style={{
                                height: '100vh',
                                width: '100vw',
                                padding: '1rem',
                            }}
                        >
                            <div
                                className="flex flex-col justify-center items-center gap-4"
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}
                            >
                                <h1>404</h1>
                                <h4
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    Would you stop knocking on this page? It
                                    doesn't exist!
                                </h4>
                                <Link href="/">
                                    <Button>Go Home</Button>
                                </Link>
                            </div>
                        </section>
                    </NextUIProvider>
                </CssVarsProvider>
            ) : (
                <div className="h-screen w-full bg-slate-900 flex justify-center items-center">
                    <h1 className="text-3xl text-white">
                        <Loading />
                        Loading...
                    </h1>
                </div>
            )}
        </>
    );
}
