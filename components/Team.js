import React, { useMemo } from 'react';
import TeamList from './TeamList';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Team = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div style={{ backgroundColor: 'black' }}>
            <div
                style={{ paddingTop: '100px', backgroundColor: 'black' }}
                className="max-w-screen-xl sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
                id="team"
            >
                <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-white-300">Zespół</h3>
                <ScrollAnimationWrapper>
                    <motion.p variants={scrollAnimation} className="leading-normal mx-auto my-8">
                        PROJEKT PLUS to zespół młodych inżynierów z doświadczeniem zdobytym podczas pracy nad projektami
                        dla klientów i inwestorów z Polski, Norwegii oraz Wielkiej Brytanii.
                    </motion.p>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper className="w-full flex flex-col py-4">
                    <motion.div variants={scrollAnimation}>
                        <TeamList />
                    </motion.div>
                </ScrollAnimationWrapper>
                {/*<ScrollAnimationWrapper className="relative w-full mt-4">*/}
                {/*    <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>*/}
                {/*        <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">*/}
                {/*            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">*/}
                {/*                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">*/}
                {/*                    Subscribe Now for <br /> Get Special Features!*/}
                {/*                </h5>*/}
                {/*                <p>Let's subscribe with us and find the fun.</p>*/}
                {/*            </div>*/}
                {/*            <ButtonPrimary>Get Started</ButtonPrimary>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"*/}
                {/*            style={{ filter: 'blur(114px)' }}*/}
                {/*        ></div>*/}
                {/*    </motion.div>*/}
                {/*</ScrollAnimationWrapper>*/}
            </div>
        </div>
    );
};

export default Team;
