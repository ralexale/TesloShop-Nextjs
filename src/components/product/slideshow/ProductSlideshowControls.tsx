import React from 'react';
import { IoChevronBack, IoChevronForwardOutline } from 'react-icons/io5';
import { useSwiper } from 'swiper/react';

export const ProductSlideshowControls = () => {
    const swiper = useSwiper();


    return (
        <div>
            <button
                className='absolute z-50  top-[50%] right-2' onClick={() => swiper.slideNext()}>
                <IoChevronForwardOutline className='text-gray-300/50 hover:text-gray-300 transition-colors' size={50} />
            </button>
            <button className='absolute z-50 top-[50%]  left-2' onClick={() => swiper.slidePrev()}>
                <IoChevronBack className='text-gray-300/50 hover:text-gray-300 transition-colors' size={50} />
            </button>
        </div>
    );
};
