import ScreenHeader from '../components/ScreenHeader';
import Tag from '../components/Tag';
import { signals } from '../data/mock-data';

export default function SignalsScreen({ onNavigate, onBack }) {
  const grouped = signals.reduce((acc, s) => {
    if (!acc[s.month]) acc[s.month] = [];
    acc[s.month].push(s);
    return acc;
  }, {});

  return (
    <div className="screen">
      <ScreenHeader title="시그널" onBack={onBack} />

      {signals.length === 0 ? (
        <div className="section">
          <div className="empty-state">
            <div className="empty-icon">&#x2727;</div>
            <div className="empty-title">발견된 시그널이 없습니다.</div>
            <div className="empty-desc">발견된 시그널이 노출됩니다.</div>
            <button className="empty-btn">다시 요청</button>
          </div>
        </div>
      ) : (
        <div className="section">
          {Object.entries(grouped).map(([month, items]) => (
            <div key={month}>
              <div className="month-label">
                {month} <span className="signal-count">{items.length}건</span>
              </div>
              {items.map(signal => (
                <div
                  className="signal-card"
                  key={signal.id}
                  onClick={() => onNavigate('signal-detail', signal)}
                >
                  <div className="signal-card-header">
                    <Tag severity={signal.severity} />
                    <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{signal.date}</span>
                  </div>
                  <div className="signal-card-title">{signal.title}</div>
                  <div className="signal-card-body">{signal.briefing}</div>
                  <div className="signal-card-footer">
                    {signal.conversationCount > 0 && (
                      <Tag severity="tracking">대화 {signal.conversationCount}건</Tag>
                    )}
                    {signal.topicCreatedCount > 0 && (
                      <Tag severity="tracking">토픽 생성 {signal.topicCreatedCount}건</Tag>
                    )}
                  </div>
                  <button className="signal-card-action">토픽 생성</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
