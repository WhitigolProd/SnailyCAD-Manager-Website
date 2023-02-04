import Image from 'next/image';
import React from 'react';

export default function HomeContributors() {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-5">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Contributors
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        SnailyCAD Manager is an open-source project, and we
                        welcome contributions from the community.
                    </p>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-500 border p-4 rounded-lg">
                            <Image
                                alt="team"
                                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://avatars.githubusercontent.com/u/53900565"
                                height={80}
                                width={80}
                            />
                            <div className="flex-grow">
                                <h2 className="text-white title-font font-medium">
                                    Dev-CasperTheGhost
                                </h2>
                                <p className="text-gray-500">
                                    SnailyCAD Creator
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-500 border p-4 rounded-lg">
                            <Image
                                alt="team"
                                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://avatars.githubusercontent.com/u/36452182"
                                height={80}
                                width={80}
                            />
                            <div className="flex-grow">
                                <h2 className="text-white title-font font-medium">
                                    Whitigol
                                </h2>
                                <p className="text-gray-500">
                                    SnailyCAD Manager Creator
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-500 border p-4 rounded-lg">
                            <Image
                                alt="team"
                                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://avatars.githubusercontent.com/u/49736448"
                                height={80}
                                width={80}
                            />
                            <div className="flex-grow">
                                <h2 className="text-white title-font font-medium">
                                    Sharki
                                </h2>
                                <p className="text-gray-500">
                                    SnailyCAD & SnailyCAD Manager Contributor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
