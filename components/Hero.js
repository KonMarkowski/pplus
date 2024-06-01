import React, { useMemo } from 'react';
import ButtonPrimary from './misc/ButtonPrimary';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import { useMediaQuery, useTheme } from '@material-ui/core';

const Hero = ({
    listUser = [
        {
            name: 'Ukończone projekty',
            number: '100',
            icon: '/assets/Icon/gridicons_location.svg',
        },
        {
            name: 'Liczba pracowników',
            number: '60',
            icon: '/assets/Icon/heroicons_sm-user.svg',
        },
        {
            name: 'Lata na rynku',
            number: '10',
            icon: '/assets/Icon/bx_bxs-server.svg',
        },
    ],
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div style={{ paddingTop: '50px' }}>
            <ScrollAnimationWrapper>
                {/*<motion.div variants={scrollAnimation}>*/}
                <div
                    style={{
                        display: 'flex',
                        height: '100vh',
                        position: 'relative',
                    }}
                >
                    <div
                        className={'centerHeader'}
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            maxWidth: '100%',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            flexDirection: 'column',
                            fontSize: 60,
                            textAlign: 'center',
                            letterSpacing: 5,
                        }}
                    >
                        <h1>We are a solid foundation</h1>
                        <h1>for groundbreaking results</h1>
                        <h1>+ Let’s BUILD someTHING +</h1>
                    </div>
                    {!isMobile && (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'end',
                                alignItems: 'end',
                                flexDirection: 'column',
                                marginLeft: 'auto',
                                padding: 76,
                            }}
                        >
                            <h3 style={{ fontSize: 30 }}>Structural Engineering & Detailed Design</h3>
                        </div>
                    )}
                    {/*<p className="text-black-500 mt-4 mb-6">*/}
                    {/*    Świadczymy kompleksowe usługi związane z projektowaniem konstrukcji budowlanych.*/}
                    {/*</p>*/}
                    {/*<ButtonPrimary>Dowiedz się więcej</ButtonPrimary>*/}
                </div>
                {/*<div className="flex w-full">*/}
                {/*    <motion.div className="h-full w-full" variants={scrollAnimation}>*/}
                {/*        <div*/}
                {/*            style={{*/}
                {/*                background: `url(team/DSC_4495-Edit.jpg)`,*/}
                {/*                boxShadow: 'inset 0px 0px 15px 15px white',*/}
                {/*                backgroundSize: 'cover',*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <img*/}
                {/*                src="/team/DSC_4495-Edit.jpg"*/}
                {/*                style={{ visibility: 'hidden' }}*/}
                {/*                alt="Construction site ilustration"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </motion.div>*/}
                {/*</div>*/}
                {/*</motion.div>*/}
            </ScrollAnimationWrapper>
            <div className="relative w-full flex">
                <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
                    {listUser.map((listUsers, index) => (
                        <motion.div
                            className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                            key={index}
                            custom={{ duration: 2 + index }}
                            variants={scrollAnimation}
                        >
                            <div className="flex mx-auto w-40 sm:w-auto">
                                <div className="flex items-center justify-center bg-pplusBlue-100 w-12 h-12 mr-6 rounded-full">
                                    <img src={listUsers.icon} className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl text-black-600 font-bold">{listUsers.number}+</p>
                                    <p className="text-lg text-black-500">{listUsers.name}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </ScrollAnimationWrapper>
                <div
                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: 'blur(114px)' }}
                ></div>
            </div>
        </div>
    );
};

export default Hero;
