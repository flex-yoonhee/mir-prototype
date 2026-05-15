import ScreenHeader from '../components/ScreenHeader';
import { voiceRecords } from '../data/mock-data';

export default function VoiceScreen({ onNavigate, onBack }) {
  return (
    <div className="screen">
      <ScreenHeader title="음성 기록" onBack={onBack} />

      <div className="voice-encrypt-notice">
        &#x1f512; 음성 메모는 기기에 암호화 저장됩니다.
      </div>

      <div className="section">
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: 14, marginBottom: 16 }}>
          &#x2039; <strong style={{ color: 'var(--text-primary)' }}>4월 20일 일요일</strong> &#x203a;
        </div>

        {voiceRecords.map((record, i) => (
          <div className="voice-item" key={i} onClick={() => onNavigate('voice-detail')} style={{ cursor: 'pointer' }}>
            <div className="voice-content">
              <div className="voice-title">{record.title}</div>
              {record.summary && (
                <div className="voice-summary">{record.summary}</div>
              )}
              <div className="voice-footer">
                <span className={`voice-tag ${record.type}`}>
                  {record.type === 'meeting' ? '미팅 녹음' : '음성 메모'}
                </span>
                {record.timeRange && (
                  <span className="voice-time-badge">{record.timeRange}</span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* loading card */}
        <div className="loading-card">
          <div className="loading-icon">&#x21BB;</div>
          <div className="loading-text">데이터를 수집하고 있습니다.</div>
          <div className="loading-subtext">완료되면 알림을 보내드립니다.</div>
        </div>
      </div>
    </div>
  );
}
