'use client';
import './globals.css';
import {
    useSSR,
    NextUIProvider,
    createTheme,
    Loading,
} from '@nextui-org/react';
import NavigationBar from '@/components/navigation-bar';
import { CssVarsProvider } from '@mui/joy/styles';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isBrowser } = useSSR();
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                {isBrowser ? (
                    <CssVarsProvider>
                        <NextUIProvider
                            theme={createTheme({
                                type: 'dark',
                            })}
                        >
                            {children}
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
            </body>
        </html>
    );
}
