import Image from 'next/image';
import { Inter } from '@next/font/google';
import NavigationBar from '@/components/navigation-bar';
import HomeHero from '@/components/home/hero';
import HomeStatistics from '@/components/home/statistics';
import HomeContributors from '@/components/home/contributors';
import PageFooter from '@/components/footer';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <NavigationBar activePage="home" />
            <div className="max-w-container flex flex-col flex-grow mx-auto">
                <HomeHero />
                <HomeStatistics />
                <HomeContributors />
            </div>
            <PageFooter />
        </>
    );
}
