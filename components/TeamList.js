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

    const settings = {
        // dots: true,
        customPaging: function (i) {
            return (
                <a className="">
                    <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
                </a>
            );
        },
        // dotsClass: 'slick-dots w-max absolute mt-20  ',
        className: 'center',
        infinite: true,
        speed: 500,
        // slidesToShow: team.length > 3 ? 3 : team.length,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '60px',
        slidesToScroll: 1,
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
    const [sliderRef, setSliderRef] = useState(null);

    return (
        <>
            <Slider
                {...settings}
                arrows={false}
                ref={setSliderRef}
                className="flex items-stretch justify-items-stretch"
            >
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
                            {/*<h5 className="mt-3 text-center text-gray-700 text-xl">{person.name}</h5>*/}
                            {/*<p className="my-2 text-center text-gray-600">{person.description}</p>*/}
                        </div>
                    </div>
                ))}
            </Slider>
            {team.length > 3 && (
                <div className="flex w-full items-center justify-end">
                    <div className="flex flex-none justify-between w-auto mt-14">
                        <div
                            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-pplusBlue-500 border hover:bg-pplusBlue-500 hover:text-white-500 transition-all text-pplusBlue-500 cursor-pointer"
                            onClick={sliderRef?.slickPrev}
                        >
                            <ArrowBack className="h-6 w-6 " />
                        </div>
                        <div
                            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-pplusBlue-500 border hover:bg-pplusBlue-500 hover:text-white-500 transition-all text-pplusBlue-500 cursor-pointer"
                            onClick={sliderRef?.slickNext}
                        >
                            <ArrowNext className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TeamList;
