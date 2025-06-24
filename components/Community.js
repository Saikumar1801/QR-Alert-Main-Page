// components/Community.js

'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger, faYoutube, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Community() {
    return (
        <section className="community section">
            <div className="container">
                <h2 className="section-title" style={{ color: 'white' }}>QR알리미 커뮤니티</h2>
                <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    QR알리미 사용자들이 공유하는 다양한 이야기와 소식을 만나보세요. 함께 소통하고 정보를 나누는 공간입니다.
                </p>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    className="community-slider"
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="video-container">
                            <iframe src="video/news_video1.mp4" title="Dramatic Look" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="video-container">
                            <iframe src="video/news_video2.mp4" title="QR Alimi Intro Video" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/6V6EE6d3BCM?&autoplay=0&mute=1&loop=1&controls=0" title="Another Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="social-links">
                    <a href="#" className="social-link"><FontAwesomeIcon icon={faBlogger} /></a>
                    <a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" className="social-link"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebookF} /></a>
                </div>
            </div>
        </section>
    );
}