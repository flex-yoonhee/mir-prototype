import ScreenHeader from '../components/ScreenHeader';
import Tag from '../components/Tag';
import { archivedTopics } from '../data/mock-data';

export default function TopicArchiveScreen({ onBack }) {
  return (
    <div className="screen">
      <ScreenHeader title="토픽 보관함" onBack={onBack} />

      <div className="section">
        {archivedTopics.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">⊟</div>
            <div className="empty-title">보관된 토픽이 없습니다.</div>
            <div className="empty-desc">종료된 토픽이 노출됩니다.</div>
          </div>
        ) : (
          archivedTopics.map(topic => (
            <div className="signal-card" key={topic.id}>
              <div className="signal-card-header">
                <Tag severity={topic.severity} />
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>종료</span>
              </div>
              <div className="signal-card-title">{topic.title}</div>
              <div className="signal-card-body">{topic.description}</div>
              {topic.conversations && (
                <div style={{ marginTop: 8 }}>
                  <Tag severity="tracking">대화 {topic.conversations}건</Tag>
                </div>
              )}
              <button className="signal-card-action">다시 추적</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
