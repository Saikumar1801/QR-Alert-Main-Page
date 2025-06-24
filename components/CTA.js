import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function CTA() {
    return (
        <section className="cta section">
            <div className="container cta-content">
                <h2>지금 바로 QR알리미를 시작해보세요!</h2>
                <p>개인정보 보호와 편리함을 동시에 누리실 수 있습니다.</p>
                <a href="#" className="btn">
                    <FontAwesomeIcon icon={faDownload} /> 무료로 다운로드
                </a>
            </div>
        </section>
    );
}