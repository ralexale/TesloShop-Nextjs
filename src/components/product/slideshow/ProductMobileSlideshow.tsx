'use client'
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './slideshow.css'

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {


    return (
        <div className={className}>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                style={{
                    '--swiper-pagination-color': 'gray',
                    width: '100dvw',
                    height: '500px'
                } as React.CSSProperties}
                pagination={{ clickable: true }}
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
                                width={600}
                                height={500}
                                priority
                                className="object-cover"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >

    )

}