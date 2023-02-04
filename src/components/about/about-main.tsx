'use client';
import React from 'react';
import { Card, Button } from '@mui/joy';
import Link from 'next/link';

export default function About() {
    return (
        <div className="p-8 mx-auto max-w-container">
            <h1 className="text-4xl font-bold text-center text-white">
                Welcome to SnailyCAD Manager! 🚀
            </h1>

            <div className="mt-8">
                <p className="text-lg text-gray-300">
                    We created this application to make your life easier when
                    using SnailyCAD, a popular CAD/MDT system for FiveM roleplay
                    communities. SnailyCAD Manager is a simple yet powerful tool
                    that makes it easy to manage your SnailyCAD settings and to
                    start, stop, and update the software with just a few clicks.
                    💻
                </p>

                <p className="mt-4 text-lg text-gray-300">
                    With SnailyCAD Manager, managing SnailyCAD settings is a
                    breeze. Our software provides an intuitive interface that
                    makes it easy to set, modify, and delete settings as needed.
                    These settings, also known as environment variables, tell
                    SnailyCAD how to run. 🔧
                </p>

                <p className="mt-4 text-lg text-gray-300">
                    In addition to managing settings, SnailyCAD Manager also
                    makes it easy to start, stop, and update SnailyCAD. Our
                    software checks for updates regularly and will prompt you to
                    install them with just a few clicks. This ensures that your
                    roleplay community always has the latest version of
                    SnailyCAD installed, with all the latest features and bug
                    fixes. 🛠️
                </p>

                <p className="mt-4 text-lg text-gray-300">
                    SnailyCAD Manager is committed to providing the best
                    possible experience for our users. Our dedication to
                    improving and enhancing the software means that you can be
                    sure that you are getting the best possible tools to manage
                    SnailyCAD. 💪
                </p>

                <div className="flex sm:w-full md:w-1/2 lg:w-1/3 mx-auto mt-5">
                    <Card>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-2xl">So why wait?</h4>
                            <p className="mt-4 text-lg text-gray-300">
                                Download SnailyCAD Manager today and start
                                managing your SnailyCAD settings and updates
                                with ease. 🚀
                            </p>
                            <Link href="/download">
                                <Button>Download Now</Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
