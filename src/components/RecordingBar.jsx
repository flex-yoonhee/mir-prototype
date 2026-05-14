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
        <button className="rec-btn" onClick={() => onNavigate('voice')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>
        </button>
        <button className="rec-btn" onClick={() => onNavigate('chat')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </button>
      </div>
    </div>
  );
}
