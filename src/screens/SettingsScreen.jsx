import { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';

export default function SettingsScreen({ onNavigate, onBack }) {
  const [micOn, setMicOn] = useState(true);
  const [notiOn, setNotiOn] = useState(true);

  return (
    <div className="screen">
      <ScreenHeader
        title="내 정보"
        onBack={onBack}
        rightActions={<div className="avatar" style={{ width: 28, height: 28 }} />}
      />

      <div className="section">
        {/* mirror */}
        <div className="settings-item" onClick={() => onNavigate('mirror')} style={{ cursor: 'pointer' }}>
          <div>
            <div className="settings-label">Mirror</div>
            <div className="settings-desc">행동 패턴을 기반 AI 피드백을 제공합니다.</div>
          </div>
          <span style={{ color: 'var(--text-secondary)' }}>›</span>
        </div>

        {/* permissions */}
        <div className="detail-label" style={{ marginTop: 20, marginBottom: 8, paddingLeft: 4 }}>앱 권한</div>
        <div className="settings-item">
          <div>
            <div className="settings-label">마이크</div>
            <div className="settings-desc">회의 녹취 및 음성 메모</div>
          </div>
          <div className={`toggle ${micOn ? 'on' : ''}`} onClick={() => setMicOn(!micOn)}>
            <div className="toggle-knob" />
          </div>
        </div>
        <div className="settings-item">
          <div>
            <div className="settings-label">알림</div>
            <div className="settings-desc">긴급 토픽 및 일정 알림</div>
          </div>
          <div className={`toggle ${notiOn ? 'on' : ''}`} onClick={() => setNotiOn(!notiOn)}>
            <div className="toggle-knob" />
          </div>
        </div>

        {/* integrations */}
        <div className="detail-label" style={{ marginTop: 20, marginBottom: 8, paddingLeft: 4 }}>연동 서비스</div>
        <div className="settings-item">
          <div>
            <div className="settings-label">Slack</div>
            <div className="settings-desc">flex-workspace</div>
          </div>
          <span style={{ color: 'var(--text-secondary)', fontSize: 13 }}>연결됨 ›</span>
        </div>
        <div className="settings-item">
          <div>
            <div className="settings-label">Gmail</div>
            <div className="settings-desc">mir@mirtopia.com</div>
          </div>
          <span style={{ color: 'var(--text-secondary)', fontSize: 13 }}>연결됨 ›</span>
        </div>

        {/* logout */}
        <button className="logout-btn">로그아웃</button>

        <div className="version-info">
          <div>Version 1.0</div>
          <div style={{ marginTop: 4 }}>flex CEO 업데이트 ↗</div>
        </div>
      </div>
    </div>
  );
}
