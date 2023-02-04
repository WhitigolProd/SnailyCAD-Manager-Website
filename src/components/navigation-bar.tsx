'use client';
import React from 'react';
import { Navbar, Dropdown } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import icon from 'public/icon.png';

interface NavbarProps {
    activePage?: 'home' | 'about' | 'download';
}

const pages = [
    {
        name: 'Home',
        href: '/',
        activePage: 'home',
    },
    {
        name: 'About',
        href: '/about',
        activePage: 'about',
    },
    {
        name: 'Download',
        href: '/download',
        activePage: 'download',
    },
];

export default function NavigationBar(props: NavbarProps) {
    return (
        <>
            <Navbar variant={'static'} isBordered>
                <Navbar.Toggle showIn={'xs'} />
                <Navbar.Collapse>
                    {pages.map((page) => (
                        <Navbar.CollapseItem
                            key={page.name}
                            isActive={props.activePage === page.activePage}
                            activeColor={'primary'}
                        >
                            <Link
                                href={page.href}
                                className={
                                    page.activePage !== props.activePage
                                        ? 'text-gray-300 hover:text-white'
                                        : 'text-blue-500'
                                }
                            >
                                {page.name}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
                <Navbar.Brand>
                    <Navbar.Content>
                        <Navbar.Link href="/">
                            <div className="flex flex-row justify-center items-center gap-2">
                                <Image
                                    src={icon}
                                    alt="SnailyCAD Manager"
                                    width={32}
                                    height={32}
                                />
                                <Navbar.Item hideIn={'xs'}>
                                    <h2 className="!text-lg !mb-0">
                                        SnailyCAD Manager
                                    </h2>
                                </Navbar.Item>
                            </div>
                        </Navbar.Link>
                    </Navbar.Content>
                </Navbar.Brand>
                <Navbar.Content
                    hideIn={'xs'}
                    variant={'highlight'}
                    enableCursorHighlight
                >
                    {pages.map((page) => (
                        <Navbar.Link
                            key={page.name}
                            href={page.href}
                            isActive={props.activePage === page.activePage}
                        >
                            {page.name}
                        </Navbar.Link>
                    ))}
                </Navbar.Content>
                <Navbar.Content>
                    <Dropdown isBordered>
                        <Navbar.Item>
                            <Dropdown.Button
                                className="border-solid border-[1px] !border-white/30 !bg-transparent"
                                ripple={false}
                            >
                                Github
                            </Dropdown.Button>
                        </Navbar.Item>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link
                                    href={
                                        'https://github.com/WhitigolProd/SnailyCAD-Manager'
                                    }
                                    target="_blank"
                                    className="w-full"
                                >
                                    v1 & v2
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    href={
                                        'https://github.com/WhitigolProd/SnailyCAD-Manager-v3'
                                    }
                                    target="_blank"
                                    className="w-full"
                                >
                                    v3
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
            </Navbar>
        </>
    );
}
