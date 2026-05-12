import { useState } from 'react';

export default function RecordingBar({ onNavigate }) {
  const [recording, setRecording] = useState(true);

  return (
    <div className="recording-bar">
      <div className="recording-bar-left" onClick={() => setRecording(!recording)}>
        <div className={`rec-indicator ${recording ? 'active' : ''}`}>
          <div className="rec-dot" />
        </div>
        <div>
          <div className="rec-text">{recording ? '녹음 종료' : '녹음 시작'}</div>
          <div className="rec-subtitle">2026 1Q 이사회</div>
        </div>
      </div>
      <div className="recording-bar-right">
        <button className="rec-btn" onClick={() => onNavigate('voice')}>☰</button>
        <button className="rec-btn" onClick={() => onNavigate('chat')}>⟳</button>
      </div>
    </div>
  );
}
