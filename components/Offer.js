import Image from 'next/image';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const offer = [
    'Projekty budowlane',
    'Projekty wykonawcze i dokumentacja projektowa',
    'Obliczenia statyczne',
    'Inwentaryzacje budowlane i ekspertyzy',
    'Projekty pełnobranżowe',
    'Tłumaczenia dokumentacji projektowej',
];

const Offer = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            style={{ paddingTop: '100px' }}
            className="max-w-screen-xl sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="offer"
        >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <Image
                            src="/assets/Illustration2.png"
                            alt="VPN Illustrasi"
                            layout="responsive"
                            quality={100}
                            height={414}
                            width={508}
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <motion.div
                        className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
                        variants={scrollAnimation}
                    >
                        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">Oferta</h3>
                        <p className="my-6 text-black-500">
                            Oferujemy usługi w zakresie projektowania konstrukcji budowlanych. Kompleksowo wykonujemy
                            projekty budowlane i wykonawcze w zakresie wszelkiego rodzaju budownictwa przemysłowego,
                            usługowego oraz mieszkaniowego. Nasza oferta obejmuje takie usługi jak:
                        </p>
                        <ul className="text-black-500 self-start list-inside ml-8">
                            {offer.map((item, index) => (
                                <motion.li
                                    style={{ cursor: 'default' }}
                                    className="relative circle-check custom-list"
                                    custom={{ duration: 2 + index }}
                                    variants={scrollAnimation}
                                    key={item}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: 0.2,
                                        },
                                    }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Offer;
