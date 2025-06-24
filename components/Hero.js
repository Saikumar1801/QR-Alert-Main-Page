import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <section className="hero section">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        <span>개인정보 지킴이</span>
                        주차차량 이동요청 플랫폼, <span className="highlight">QR알리미</span>
                    </h1>
                    <p className="hero-description">
                        차량번호만으로 생성되는 QR코드와 앱내 알림으로 요청되어
                        상호간 전화번호 노출이 전혀없는 개인정보 안전 서비스!
                        QR알리미를 통해 개인 정보를 보호하세요.
                    </p>
                    <a href="#" className="btn">
                        <FontAwesomeIcon icon={faDownload} /> 앱 다운로드
                    </a>
                    
                    <div className="qr-codes">
                       <a href="#" className="qr-code-item">
                           <Image src="/images/badge-google-play.png" alt="Get it on Google Play" width={180} height={53} />
                       </a>
                       <a href="#" className="qr-code-item">
                           <Image src="/images/badge-app-store.png" alt="Download on the App Store" width={180} height={53} />
                       </a>
                       <a href="#" className="qr-code-item">
                           <Image src="/images/badge-download-pdf.png" alt="Download Introduction PDF" width={180} height={53} />
                       </a>
                    </div>
                </div>
                
                <div className="hero-image">
                    {/* The original image was a placeholder SVG, you can replace it with a more specific one if you have it */}
                    <img src="/images/Hero-.png" alt="Get it on Google Play"/>
                </div>
            </div>
        </section>
    );
}