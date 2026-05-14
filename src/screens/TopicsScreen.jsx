import { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import BottomSheet from '../components/BottomSheet';
import Tag from '../components/Tag';
import { topics } from '../data/mock-data';

export default function TopicsScreen({ onNavigate, onBack }) {
  const [showAdd, setShowAdd] = useState(false);

  const activeTopics = topics.filter(t => t.status === 'active');
  const hasUpdates = activeTopics.filter(t => t.daysAgo <= 3).length;

  return (
    <div className="screen">
      <ScreenHeader
        title="토픽"
        onBack={onBack}
        rightActions={
          <>
            <button className="screen-header-btn topic-header-action" onClick={() => onNavigate('topic-archive')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>
            </button>
            <button className="screen-header-btn topic-header-action" onClick={() => setShowAdd(true)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </>
        }
      />

      {hasUpdates > 0 && (
        <div style={{ padding: '0 16px 8px' }}>
          <span className="update-badge">업데이트 {hasUpdates}</span>
        </div>
      )}

      <div className="section">
        {activeTopics.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">✧</div>
            <div className="empty-title">추적중인 토픽이 없습니다.</div>
            <div className="empty-desc">생성된 토픽이 노출됩니다.</div>
            <button className="empty-btn" onClick={() => setShowAdd(true)}>토픽 추가</button>
          </div>
        ) : (
          activeTopics.map(topic => (
            <div
              className="signal-card"
              key={topic.id}
              onClick={() => onNavigate('topic-detail', topic)}
            >
              <div className="signal-card-header">
                <Tag severity={topic.severity} />
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{topic.daysAgo}일 경과</span>
              </div>
              <div className="signal-card-title">
                {topic.hasRecentUpdate && <span className="topic-unread-dot" />}
                {topic.title}
                {topic.isNew && <span className="new-badge">NEW</span>}
              </div>
              <div className="signal-card-body">{topic.lastUpdate}</div>
              {topic.conversations && (
                <div style={{ marginTop: 8 }}>
                  <Tag severity="tracking">대화 {topic.conversations}건</Tag>
                </div>
              )}
              <button className="signal-card-action">추적 종료</button>
            </div>
          ))
        )}
      </div>

      {/* add topic bottom sheet */}
      <BottomSheet open={showAdd} onClose={() => setShowAdd(false)}>
        <h3>
          토픽 추가
          <button className="bottom-sheet-close" onClick={() => setShowAdd(false)}>✕</button>
        </h3>
        <input
          className="sheet-input"
          placeholder="토픽 제목"
        />
        <textarea
          className="sheet-textarea"
          placeholder="어떤 주제를 추적하고 싶은지 설명해주세요."
          rows={4}
        />
        <button className="sheet-submit">추가하기</button>
      </BottomSheet>
    </div>
  );
}
