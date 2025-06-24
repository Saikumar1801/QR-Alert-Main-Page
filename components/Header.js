'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <div className="container header-container">
                <a href="#" className="logo">
                    <Image src="/images/logo-3d.png" alt="QR Alimi Logo" width={40} height={40} />
                    <span>QR알리미</span>
                </a>
                
                <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </div>
                
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#" className="nav-link active">QR알리미란?</a>
                    <a href="#" className="nav-link">QR알리미 사용하기</a>
                    <a href="#" className="nav-link">고객센터</a>
                    <a href="#" className="nav-link">B2B</a>
                    <a href="#" className="btn">앱 다운로드</a>
                </nav>
            </div>
        </header>
    );
}