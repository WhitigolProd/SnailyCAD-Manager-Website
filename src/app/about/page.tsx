import About from '@/components/about/about-main';
import NavigationBar from '@/components/navigation-bar';
import React from 'react';

export default function page() {
    return (
        <>
            <NavigationBar activePage="about" />
            <About />
        </>
    );
}
