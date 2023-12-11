'use client'
import { useState } from 'react';
import Image from "next/image";

import { Swiper as SwiperObject } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/thumbs';

import './slideshow.css'
import { ProductSlideshowControls } from './ProductSlideshowControls';

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductSlideshow = ({ images, title, className }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={className}>
            <Swiper
                modules={[Navigation, Thumbs, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {
                    images.map((image) => (
                        <SwiperSlide key={image} >
                            <Image src={`/products/${image}`}
                                alt={title}
                                width={1024}
                                height={800}
                                priority
                                className="rounded-lg object-cover"
                            />
                        </SwiperSlide>
                    ))
                }
                <ProductSlideshowControls />
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper as any}
                spaceBetween={0}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mt-5 mySwiper"
            >
                {
                    images.map((image) => (
                        <SwiperSlide key={image} >
                            <Image src={`/products/${image}`}
                                alt={image}
                                width={300}
                                height={300}
                                className="rounded-lg max-h-[250px] max-w-[250px] object-contain"
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div >

    )

}