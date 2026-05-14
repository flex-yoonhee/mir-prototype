import { useState, useRef } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import { chatHistory, company } from '../data/mock-data';

export default function ChatScreen({ onNavigate, onBack }) {
  const [showHistory, setShowHistory] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  if (showHistory) {
    const grouped = chatHistory.reduce((acc, c) => {
      if (!acc[c.month]) acc[c.month] = [];
      acc[c.month].push(c);
      return acc;
    }, {});

    return (
      <div className="screen">
        <ScreenHeader
          title="대화 목록"
          onBack={() => setShowHistory(false)}
          rightActions={<button className="screen-header-btn" style={{ fontSize: 13 }}>선택</button>}
        />
        <div className="section">
          {Object.entries(grouped).map(([month, items]) => (
            <div key={month}>
              <div className="chat-month-header">{month}</div>
              {items.map((c, i) => (
                <div className="chat-history-item" key={i} onClick={() => setShowHistory(false)}>
                  <div className="chat-history-title">
                    {c.hasUnread && <div className="unread-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />}
                    {c.title} ✎
                  </div>
                  <div className="chat-history-date">{c.date}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`chat-screen ${focused ? 'keyboard-open' : ''}`}>
      <ScreenHeader
        title="flex AI"
        onBack={onBack}
        rightActions={<button className="screen-header-btn" onClick={() => setShowHistory(true)}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg></button>}
      />

      <div className="chat-messages" onClick={() => { setFocused(false); inputRef.current?.blur(); }}>
        <div className="ai-message">
          <div className="ai-avatar">⟳</div>
          <div className="ai-text">{company.ceoName}님, 안녕하세요.</div>
        </div>
      </div>

      <div className="chat-input-area">
        <div className="chat-input-box" onClick={() => { setFocused(true); inputRef.current?.focus(); }}>
          <div className="chat-input-top">
            <input
              ref={inputRef}
              placeholder="어떤 도움이 필요하신가요?"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <button className="chat-send-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </button>
          </div>
          <div className="chat-input-bottom">
            <div className="chat-topic-selector">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              토픽
              <span>∨</span>
            </div>
          </div>
        </div>
      </div>

      {focused && (
        <div className="mock-keyboard">
          <div className="keyboard-row">
            {'ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ'.split('').map(k => <span key={k} className="key">{k}</span>)}
          </div>
          <div className="keyboard-row">
            {'ㅁㄴㅇㄹㅎㅗㅓㅏㅣ'.split('').map(k => <span key={k} className="key">{k}</span>)}
          </div>
          <div className="keyboard-row">
            <span className="key wide">⇧</span>
            {'ㅋㅌㅊㅍㅠㅜㅡ'.split('').map(k => <span key={k} className="key">{k}</span>)}
            <span className="key wide">⌫</span>
          </div>
          <div className="keyboard-row bottom-row">
            <span className="key">123</span>
            <span className="key">🌐</span>
            <span className="key space">스페이스</span>
            <span className="key">완료</span>
          </div>
        </div>
      )}
    </div>
  );
}
