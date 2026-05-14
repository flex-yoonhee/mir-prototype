import { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import BottomSheet from '../components/BottomSheet';
import Tag from '../components/Tag';
import { topics } from '../data/mock-data';

export default function TopicsScreen({ onNavigate, onBack }) {
  const [showAdd, setShowAdd] = useState(false);
  const [selectedSeverity, setSelectedSeverity] = useState('urgent');

  const activeTopics = topics.filter(t => t.status === 'active');
  const hasUpdates = activeTopics.filter(t => t.daysAgo <= 3).length;

  return (
    <div className="screen">
      <ScreenHeader
        title="토픽"
        onBack={onBack}
        rightActions={
          <>
            <button className="screen-header-btn" onClick={() => onNavigate('topic-archive')}>⊟</button>
            <button className="screen-header-btn" onClick={() => setShowAdd(true)}>+</button>
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
              <button className="signal-card-action">종료</button>
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
        <div className="severity-selector">
          {['urgent', 'caution', 'normal'].map(s => (
            <button
              key={s}
              className={`severity-option ${s} ${selectedSeverity === s ? 'selected' : ''}`}
              onClick={() => setSelectedSeverity(s)}
            >
              <Tag severity={s} />
            </button>
          ))}
        </div>
        <textarea
          className="sheet-textarea"
          placeholder="현 시점에서 조직의 가장 큰 문제 10가지를 뽑아줘. 내용을 구성할 때 비슷한 주제끼리는 그룹핑해서 정리해주면 좋을 것 같아."
          rows={4}
        />
        <button className="sheet-submit">추가하기</button>
      </BottomSheet>
    </div>
  );
}
