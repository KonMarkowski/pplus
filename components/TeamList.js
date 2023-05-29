import React, { useState } from 'react';

// import react slick
import Slider from 'react-slick';
import Image from 'next/image';
import Stars from '../public/assets/Icon/stars.svg';
import ArrowBack from '../public/assets/Icon/eva_arrow-back-fill.svg';
import ArrowNext from '../public/assets/Icon/eva_arrow-next-fill.svg';

const TeamList = ({
    team = [
        {
            name: 'Koleś Pierwszy',
            image: '/team/person1.jpeg',
            description: 'blablabla 100 lat doświadczenia',
        },
        {
            name: 'Koleś Drugi',
            image: '/team/person2.jpeg',
            description: 'blablabla 30 lat doświadczenia',
        },
        {
            name: 'Koleś Trzeci',
            image: '/team/person3.jpeg',
            description: 'blablabla 2 lata doświadczenia',
        },
        {
            name: 'Koleś Czwarty',
            image: '/team/person4.jpeg',
            description: 'blablabla 7 lat doświadczenia',
        },
    ],
}) => {
    const settings = {
        dots: true,
        customPaging: function (i) {
            return (
                <a className="">
                    <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
                </a>
            );
        },
        dotsClass: 'slick-dots w-max absolute mt-20  ',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
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
                        <div className="bg-center border-2  border-gray-500 hover:border-pplusBlue-500 transition-all rounded-2xl flex flex-col overflow-hidden">
                            <div
                                style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(255,255,255,1) 0%,  rgba(0,0,0,0) 10%, rgba(0,0,0,0) 100%), url(${person.image})`,
                                }}
                                className="h-[300px] bg-cover w-full"
                            />
                            <h5 className="mt-3 text-center text-gray-700 text-xl">{person.name}</h5>
                            <p className="my-2 text-center text-gray-600">{person.description}.</p>
                        </div>
                    </div>
                ))}
            </Slider>
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
        </>
    );
};

export default TeamList;
