import Image from 'next/image';

export default function Problem() {
    // Add this style to your globals.css to ensure image backgrounds are transparent
    // .problem-card img { background: transparent; padding: 0; }
    return (
        <section className="problem section">
            <div className="container">
                <h2 className="section-title">운전하시나요?<br/>혹시, 차 앞유리에 연락처를 남겨두시나요?</h2>
                <p className="section-subtitle">차량 앞에 연락처를 남겨두면 개인정보가 유출되어 스팸 및 사기 위험에 노출됩니다. 최근 발생한 사례를 통해 문제점을 확인해보세요.</p>
                
                <div className="problem-content">
                    <div className="problem-card">
                        <Image src="/images/icon-unlocked.png" alt="Privacy Issue" width={100} height={100} />
                        <h3>개인정보 유출 문제</h3>
                        <p>차량 앞에 연락처를 남겨두면 개인정보가 유출되어 스팸 및 사기 위험에 노출됩니다.</p>
                    </div>
                    
                    <div className="problem-card">
                        <div className="floating-badge">!</div>
                        <Image src="/images/icon-scan.png" alt="Real Case" width={100} height={100} />
                        <h3>실제 사례</h3>
                        <p>최근 차량 앞에 놓아두는 연락처로 인한 개인정보 유출 사건이 많이 발생하고 있습니다.</p>
                    </div>
                    
                    <div className="problem-card">
                        <Image src="/images/icon-car.png" alt="Solution Needed" width={100} height={100} />
                        <h3>해결책 필요</h3>
                        <p>개인정보를 보호하면서도 차량 이동 요청을 할 수 있는 안전한 방법이 필요합니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}