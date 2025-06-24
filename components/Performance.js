'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faQrcode, faSmile, faBolt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

function StatsCard({ icon, endValue, label }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = parseFloat(endValue.replace(/[^0-9.]/g, ''));
                    if (start === end) return;

                    const duration = 2000;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            clearInterval(timer);
                            setCount(endValue);
                        } else {
                            if (endValue.includes('.')) {
                                setCount(start.toFixed(1));
                            } else {
                                setCount(Math.ceil(start));
                            }
                        }
                    }, 16);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [endValue]);

    return (
        <div className="stats-card" ref={ref}>
            <div className="performance-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="stats-number">{count}{endValue.includes('+') ? '+' : ''}</div>
            <div className="stats-label">{label}</div>
        </div>
    );
}

export default function Performance() {
    return (
        <section className="performance section">
            <div className="container">
                <h2 className="section-title">QR알리미의 성과</h2>
                <p className="section-subtitle">우리의 성과를 숫자로 확인해보세요</p>
                <div className="performance-container">
                    <StatsCard icon={faUsers} endValue="100000+" label="사용자" />
                    <StatsCard icon={faQrcode} endValue="500000+" label="생성된 QR코드" />
                    <StatsCard icon={faSmile} endValue="99.8" label="사용자 만족도" />
                    <StatsCard icon={faBolt} endValue="24/7" label="실시간 알림" />
                </div>
            </div>
        </section>
    );
}