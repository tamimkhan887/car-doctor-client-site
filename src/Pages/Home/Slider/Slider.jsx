import React, { useState } from 'react';
import sliderImg1 from "../../../assets/images/homeCarousel/1.jpg";
import sliderImg2 from "../../../assets/images/homeCarousel/2.jpg";
import sliderImg3 from "../../../assets/images/homeCarousel/3.jpg";
import sliderImg4 from "../../../assets/images/homeCarousel/4.jpg";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Slider = () => {
    const slides = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="relative w-full overflow-hidden rounded-lg h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className="w-full h-full object-cover flex-shrink-0"
                        alt={`slide-${index}`}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#201f1f] to-[#15151515] flex items-center">
                <div className="px-6 md:px-20 md:space-y-4 space-y-2 max-w-xl">
                    <h2 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
                        Affordable <br /> Price For Car <br /> Servicing
                    </h2>

                    <p className="text-white text-sm md:text-lg">
                        There are many variations of passages available,
                        but the majority have suffered alteration.
                    </p>

                    <div className="flex gap-2 md:gap-4">
                        <button className="text-sm md:text-lg font-semibold text-white bg-[#FF3811] px-4  md:px-6 py-3 rounded">
                            Discover More
                        </button>
                        <button className="text-sm md:text-lg font-semibold text-white border border-white px-4 md:px-6 py-3 rounded block">
                            Latest Project
                        </button>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute right-4 md:right-10 bottom-6 flex gap-4">
                <button
                    onClick={handlePrev}
                    className="bg-[#2e24248c] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-[#FF3811]"
                >
                    <BsArrowLeft size={20} color="white" />
                </button>

                <button
                    onClick={handleNext}
                    className="bg-[#2e24248c] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-[#FF3811]"
                >
                    <BsArrowRight size={20} color="white" />
                </button>
            </div>
        </div>
    );
};

export default Slider;
