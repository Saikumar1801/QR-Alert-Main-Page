// components/News.js

'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const newsData = [
    {
        img: "/images/news-1.png",
        title: "2023 사우디아라비아 타이프 투자포럼 참가",
        date: "2023. 12. 04"
    },
    {
        img: "/images/news-2.png",
        title: "QR알리미 와디즈 크라우드펀딩 2차펀딩 Start!!!",
        date: "2023. 10. 10"
    },
    {
        img: "/images/news-3.png",
        title: "(주)제제컴즈 'QR알리미'로 2023 SWEX(스마트 워크 엑스포 코리아) 참가!!!",
        date: "2023. 09. 16"
    },
    {
        img: "/images/news-4.png",
        title: "(주)제제컴즈_사우디아라비아 타이프시티 전용 플랫폼 개발사업 3차 발표 진행",
        date: "2023. 09. 15"
    },
    {
        img: "/images/news-5.png",
        title: "(주)제제컴즈_사우디아라비아 타이프주 뉴딜 스마트시티 조성사업 통합플랫폼 기반 구축부분 2차 발표",
        date: "2023. 07. 26"
    },
    {
        img: "/images/news-6.png",
        title: "제제컴즈, 주차 차량 이동 요청 플랫폼 'QR 알리미' 펀딩 오픈 - 경제인뉴스",
        date: "2023. 06. 13"
    }
];

export default function News() {
    return (
        <section className="news section">
            <div className="container">
                <h2 className="section-title">QR알리미 소식</h2>
                <p className="section-subtitle">QR알리미의 최신 소식과 업데이트 정보를 확인하세요. 다양한 매체에서 소개된 QR알리미의 성장 스토리를 만나보실 수 있습니다.</p>
                
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    className="news-item-slider"
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 15 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 }
                    }}
                >
                    {newsData.map((item, index) => (
                         <SwiperSlide key={index} className="news-item">
                            <div className="news-image">
                               <Image 
                                    src={item.img} 
                                    alt={item.title} 
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="news-content">
                                <h3>{item.title}</h3>
                                <p className="news-date">{item.date}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}