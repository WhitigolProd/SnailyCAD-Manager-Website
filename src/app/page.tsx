import Image from 'next/image';
import { Inter } from '@next/font/google';
import NavigationBar from '@/components/navigation-bar';
import HomeHero from '@/components/home/hero';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <NavigationBar activePage="home" />
            <div className="max-w-container mx-auto">
                <HomeHero />
            </div>
        </>
    );
}
