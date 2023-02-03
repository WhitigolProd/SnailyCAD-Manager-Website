'use client';
import { Button } from '@mui/joy';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Link from 'next/link';
import React from 'react';

export default function HomeHero() {
    return (
        <>
            <section className="text-gray-500 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            SnailyCAD Manager
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            SnailyCAD Manager is a Third Party tool for Managing{' '}
                            <Link href="https://github.com/SnailyCAD/snaily-cadv4">
                                SnailyCAD by Dev-CasperTheGhost
                            </Link>
                            . Built with user experience in mind, SnailyCAD
                            Manager is a great tool for streamlining the process
                            of installing, updating, and managing SnailyCAD.
                        </p>
                        <Card>
                            <h4>Choose your Platform</h4>
                            <div className="flex justify-center items-center gap-2">
                                <Button>Windows</Button>
                                <Button color="warning" disabled>
                                    Linux Coming Soon
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded-2xl -skew-x-6 -skew-y-3 shadow-lg shadow-white/10"
                            alt="hero"
                            width={672}
                            height={529}
                            src="hero-1.png"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
