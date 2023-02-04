import About from '@/components/about/about-main';
import PageFooter from '@/components/footer';
import NavigationBar from '@/components/navigation-bar';
import React from 'react';

export default function page() {
    return (
        <>
            <div className="flex flex-col grow">
                <NavigationBar activePage="about" />
                <About />
            </div>
            <PageFooter />
        </>
    );
}
