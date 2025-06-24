import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links">
                        <h4>회사소개</h4>
                        <ul>
                            <li><a href="#">회사소개</a></li>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">개인정보처리방침</a></li>
                            <li><a href="#">운영정책</a></li>
                        </ul>
                    </div>
                    
                    <div className="contact-info">
                        <h4>연락처</h4>
                        <p><FontAwesomeIcon icon={faPhone} />070-4252-5571</p>
                        <p><FontAwesomeIcon icon={faEnvelope} />jejecomms@gmail.com</p>
                        <p><FontAwesomeIcon icon={faFax} />0504-486-5575</p>
                    </div>
                    
                    <div className="footer-links">
                        <h4>회사 정보</h4>
                        <p>(주)제제컴즈</p>
                        <p>대표자: 김준강</p>
                        <p>사업자등록번호: 641-88-00828</p>
                        <p>통신판매업신고: 제2021-성남수정-1335호</p>
                    </div>
                </div>
                
                <div className="copyright">
                    <p>13449 경기 성남시 수정구 달래내로 46, 성남글로벌융합센터 A동 405호.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                        <Image src="/images/logo-text-dark.png" alt="QR Alimi" width={100} height={25} />
                        <span>© 2023 QR알리미. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}