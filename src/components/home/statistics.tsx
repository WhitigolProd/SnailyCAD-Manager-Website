'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loading } from '@nextui-org/react';

const releasesUrl =
    'https://api.github.com/repos/WhitigolProd/SnailyCAD-Manager/releases';
const repoUrl = 'https://api.github.com/repos/WhitigolProd/SnailyCAD-Manager';

export default function HomeStatistics() {
    const [stats, setStats] = useState({
        downloads: 0,
        stars: 0,
        issues: 0,
        forks: 0,
    });

    useEffect(() => {
        axios
            .get(releasesUrl)
            .then((res) => {
                let downloads = 0;
                res.data.forEach((release: any) => {
                    downloads += release.assets.reduce(
                        (acc: any, asset: any) => {
                            return acc + asset.download_count;
                        },
                        0
                    );
                });
                setStats((prev) => ({ ...prev, downloads }));
            })
            .catch((err) => {
                setStats((prev) => ({ ...prev, downloads: -1 }));
                throw new Error(err);
            });

        axios
            .get(repoUrl)
            .then((res) => {
                setStats((prev) => ({
                    ...prev,
                    stars: res.data.stargazers_count,
                    issues: res.data.open_issues,
                    forks: res.data.forks_count,
                }));
            })
            .catch((err) => {
                setStats((prev) => ({
                    ...prev,
                    stars: -1,
                    issues: -1,
                    forks: -1,
                }));
                throw new Error(err);
            });
    }, []);

    return (
        <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                    {stats.downloads ? (
                        stats.downloads.toLocaleString()
                    ) : (
                        <Loading />
                    )}
                </h2>
                <p className="leading-relaxed text-white/60">
                    Current Downloads
                </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                    {stats.stars ? stats.stars.toLocaleString() : <Loading />}
                </h2>
                <p className="leading-relaxed text-white/60">GitHub Stars</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                    {stats.issues ? stats.issues.toLocaleString() : <Loading />}
                </h2>
                <p className="leading-relaxed text-white/60">Open Issues</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                    {stats.forks ? stats.forks.toLocaleString() : <Loading />}
                </h2>
                <p className="leading-relaxed text-white/60">Forks</p>
            </div>
        </div>
    );
}
