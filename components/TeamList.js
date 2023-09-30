import React, { useState } from 'react';

// import react slick
import Slider from 'react-slick';
import ArrowBack from '../public/assets/Icon/eva_arrow-back-fill.svg';
import ArrowNext from '../public/assets/Icon/eva_arrow-next-fill.svg';

const TeamList = () => {
    const team = [
        {
            image: '/team/DSC_4273-2-Edit.jpg',
        },
        {
            image: '/team/DSC_3982-Edit.jpg',
        },
        {
            image: '/team/DSC_3998-Edit.jpg',
        },
        {
            image: '/team/DSC_4030-Edit.jpg',
        },
        {
            image: '/team/DSC_4066-Edit.jpg',
        },
        {
            image: '/team/DSC_4100-Edit.jpg',
        },
        {
            image: '/team/DSC_4156-Edit.jpg',
        },
        {
            image: '/team/DSC_4190-Edit.jpg',
        },
    ];
    const CustomNextArrow = ({ onClick }) => (
        <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-backgroundSemiTransparent-600 border-pplusBlue-500 border hover:bg-pplusBlue-500 hover:text-white-500 transition-all text-pplusBlue-500 cursor-pointer"
            style={{
                position: 'absolute',
                zIndex: 1000,
                top: '50%',
                right: 0,
                transform: 'translate(0, -50%)',
                backdropFilter: 'blur(5px)',
            }}
            onClick={onClick}
        >
            <ArrowNext className="h-6 w-6 " />
        </div>
    );

    const CustomPrevArrow = ({ onClick }) => (
        <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-backgroundSemiTransparent-600  border-pplusBlue-500 border hover:bg-pplusBlue-500 hover:text-white-500 transition-all text-pplusBlue-500 cursor-pointer"
            style={{
                position: 'absolute',
                zIndex: 1000,
                top: '50%',
                left: 0,
                transform: 'translate(0, -50%)',
                backdropFilter: 'blur(5px)',
            }}
            onClick={onClick}
        >
            <ArrowBack className="h-6 w-6 " />
        </div>
    );

    const settings = {
        className: 'slides',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const [setSliderRef] = useState(null);

    return (
        <>
            <Slider {...settings} ref={setSliderRef} className="flex items-stretch justify-items-stretch">
                {team.map((person, index) => (
                    <div className="px-3" key={index}>
                        <div className="bg-center transition-all rounded-2xl flex flex-col overflow-hidden">
                            <div className="bg-cover w-full">
                                <img
                                    style={{
                                        backgroundImage: `linear-gradient(0deg, rgba(255,255,255,1) 0%,  rgba(0,0,0,0) 10%, rgba(0,0,0,0) 100%))`,
                                    }}
                                    src={person.image}
                                    alt="Person"
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default TeamList;
