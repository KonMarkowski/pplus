import React, { useMemo } from 'react';
import ButtonPrimary from './misc/ButtonPrimary';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { colors } from '@/styles/colors';

const About = ({
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

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    height: '100vh',
                    backgroundImage:
                        'url(https://i.pinimg.com/originals/c0/f1/3e/c0f13e9ae017b2c0d75329cef8f782fa.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                }}
            ></div>

            <div
                style={{
                    height: '25vh',
                }}
            >
                Projekt+ is a high-performance Team of young & experienced specialists. Our focus is to design and
                produce best-quality engineering objects. We take care of details & we think global, so as we partner in
                brave design.
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px 100px 20px 100px',
                    fontSize: 120,
                    color: 'white',
                    backgroundColor: colors.pplusBlue['500'],
                }}
            >
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <h2
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'end',
                        }}
                    >
                        14+ <div style={{ fontSize: 20, paddingLeft: 12, paddingBottom: 42 }}>Years</div>
                    </h2>
                    <h2
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'end',
                        }}
                    >
                        60+ <div style={{ fontSize: 20, paddingLeft: 12, paddingBottom: 42 }}>BIM Detailers</div>
                    </h2>
                    <h2
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'end',
                        }}
                    >
                        100+ <div style={{ fontSize: 20, paddingLeft: 12, paddingBottom: 42 }}>Projects</div>
                    </h2>
                </div>
                {/*<div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>*/}
                {/*    <h2>8 Engineers</h2>*/}
                {/*    <h2>60 Tekla licences</h2>*/}
                {/*    <h2>+Sky is the limit only for the buildings</h2>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default About;
