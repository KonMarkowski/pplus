import React, { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Menu, QuestionAnswerOutlined } from '@material-ui/icons';
import { colors } from '@/styles/colors';
import { Button, IconButton } from '@material-ui/core';

const Header = ({ activeLink, setActiveLink }) => {
    const [linkInView, setLinkInView] = useState(null);
    const [scrollingTo, setScrollingTo] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);

    useEffect(() => {
        if (scrollingTo === null && activeLink !== linkInView) {
            setActiveLink(linkInView);
        }

        if (scrollingTo !== null && activeLink !== scrollingTo) {
            setActiveLink(scrollingTo);
        }

        if (scrollingTo === linkInView) {
            setScrollingTo(null);
        }
    }, [activeLink, scrollingTo, linkInView]);

    return (
        <>
            <header className={'navbar-top fixed top-0 w-full  z-30 transition-all'}>
                <nav
                    className="px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4"
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <div
                        style={{
                            backgroundImage: 'url("/assets/Logo.png")',
                            width: '400px',
                            height: '80px',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                    {/*TODO: burgerek tylko na desktop*/}
                    <IconButton>
                        <Menu fontSize={'large'} />
                    </IconButton>
                </nav>
            </header>

            {/* Mobile Navigation */}
            <nav className="navbar-bottom fixed lg:hidden bottom-0 left-0 right-0 px-4 sm:px-8 shadow-t bg-white-500">
                <div className=" sm:px-3">
                    <ul className="flex w-full justify-between items-center text-black-500">
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setLinkInView('about');
                            }}
                            className={
                                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                                (linkInView === 'about'
                                    ? '  border-pplusBlue-500 text-pplusBlue-500'
                                    : ' border-transparent')
                            }
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            O nas
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="offer"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setLinkInView('offer');
                            }}
                            className={
                                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                                (linkInView === 'offer'
                                    ? '  border-pplusBlue-500 text-pplusBlue-500'
                                    : ' border-transparent ')
                            }
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                            Oferta
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setLinkInView('team');
                            }}
                            className={
                                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                                (linkInView === 'team'
                                    ? '  border-pplusBlue-500 text-pplusBlue-500'
                                    : ' border-transparent ')
                            }
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Zespół
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setLinkInView('projects');
                            }}
                            className={
                                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                                (linkInView === 'projects'
                                    ? '  border-pplusBlue-500 text-pplusBlue-500'
                                    : ' border-transparent ')
                            }
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                            Projekty
                        </LinkScroll>
                        <div
                            style={{
                                position: 'fixed',
                                right: 20,
                                bottom: 70,
                                borderRadius: 1000,
                                background: colors.pplusBlue['500'],
                                color: 'white',
                                padding: 15,
                            }}
                        >
                            <QuestionAnswerOutlined />
                        </div>
                    </ul>
                </div>
            </nav>
            {/* End Mobile Navigation */}
        </>
    );
};

export default Header;
