import ScreenHeader from '../components/ScreenHeader';
import { voiceRecords } from '../data/mock-data';

export default function VoiceScreen({ onBack }) {
  return (
    <div className="screen">
      <ScreenHeader title="음성 기록" onBack={onBack} />

      <div className="voice-encrypt-notice">
        🔒 음성 메모는 기기에 암호화 저장됩니다.
      </div>

      <div className="section">
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: 14, marginBottom: 16 }}>
          ‹ <strong style={{ color: 'var(--text-primary)' }}>4월 20일 일요일</strong> ›
        </div>

        {voiceRecords.map((record, i) => (
          <div className="voice-item" key={i}>
            <div className="voice-time">{record.time}</div>
            <div className="voice-content">
              <div className="voice-title">
                {record.title}
                <span className={`voice-type ${record.type}`}>
                  {record.type === 'meeting' ? '미팅' : '음성 메모'}
                </span>
              </div>
              <div className="voice-subtitle">{record.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
