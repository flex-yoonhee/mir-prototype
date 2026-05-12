import { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import { chatHistory, company } from '../data/mock-data';

export default function ChatScreen({ onNavigate, onBack }) {
  const [showHistory, setShowHistory] = useState(false);

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
    <div className="chat-screen">
      <ScreenHeader
        title="flex AI"
        onBack={onBack}
        rightActions={<button className="screen-header-btn" onClick={() => setShowHistory(true)}>☰</button>}
      />

      <div className="chat-messages">
        <div className="ai-message">
          <div className="ai-avatar">⟳</div>
          <div className="ai-text">{company.ceoName}님, 안녕하세요.</div>
        </div>
      </div>

      <div className="chat-input-area">
        <div className="chat-topic-selector">
          ≡ 토픽 <span>∨</span>
        </div>
        <div className="chat-input-row">
          <input placeholder="어떤 도움이 필요하신가요?" />
          <button className="chat-send-btn">↑</button>
        </div>
      </div>
    </div>
  );
}
