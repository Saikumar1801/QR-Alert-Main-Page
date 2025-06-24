// components/Solution.js

'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBell } from '@fortawesome/free-solid-svg-icons';

export default function Solution() {
    return (
        <section className="solution section">
            <div className="container">
                <div className="solution-header">
                    <h2 className="solution-title">왜 QR알리미여야 할까요?</h2>
                    <p className="solution-subtitle">QR알리미는 안전하고 편리한 주차차량 이동요청을 위한 <span className="solution-highlight">최고의 솔루션</span>입니다. 혁신적인 접근 방식으로 개인정보를 보호하면서 원활한 주차 경험을 보장합니다.</p>
                </div>
                
                <div className="solution-cards">
                    {/* Card 1: Privacy Protection (Unchanged) */}
                    <div className="solution-card">
                        <div className="solution-image">
                            <Image src="/images/icon-privacy.png" alt="개인정보 보호" width={100} height={100} className="solution-icon-custom" />
                        </div>
                        <div className="solution-content">
                            <h3><Image src="/images/icon-privacy.png" alt="" width={24} height={24} /> 개인정보 보호</h3>
                            <p>더 이상 전화번호를 노출할 필요가 없습니다. QR알리미는 차량 번호판에 연결된 보안 QR코드를 사용하여 이동 요청 시 완벽한 개인정보 보호를 보장합니다.</p>
                            <a href="#" className="btn btn-secondary">더 알아보기</a>
                        </div>
                    </div>
                    
                    {/* Card 2: Multi-Vehicle Management (Corrected) */}
                    <div className="solution-card">
                        <div className="solution-image">
                            <Image 
                                src="/images/solution-vans.jpg" 
                                alt="차량 관리" 
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="solution-content">
                            <h3><FontAwesomeIcon icon={faCar} /> 다중 차량 관리</h3>
                            <p>계정당 최대 3대의 차량을 관리하세요. 사용자 친화적인 인터페이스로 각 차량의 QR코드를 쉽게 생성하고 인쇄할 수 있습니다.</p>
                            <a href="#" className="btn btn-secondary">더 알아보기</a>
                        </div>
                    </div>
                    
                    {/* Card 3: App Notification Service (Corrected) */}
                    <div className="solution-card">
                        <div className="solution-image">
                             <Image 
                                src="/images/solution-notification.jpg" 
                                alt="앱 알림" 
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             />
                        </div>
                        <div className="solution-content">
                            <h3><FontAwesomeIcon icon={faBell} /> 앱 알림 서비스</h3>
                            <p>100% 앱 기반 알림입니다. 임시 번호를 사용하는 서비스와 달리 QR알리미는 모든 통신을 안전한 앱 환경 내에서 유지합니다.</p>
                            <a href="#" className="btn btn-secondary">더 알아보기</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}