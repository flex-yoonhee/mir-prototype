import ScreenHeader from '../components/ScreenHeader';
import { mirrorData } from '../data/mock-data';

export default function MirrorScreen({ onNavigate, onBack }) {
  const m = mirrorData;

  return (
    <div className="screen">
      <ScreenHeader title="Mirror" onBack={onBack} />

      <div className="section">
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: 14, marginBottom: 16 }}>
          ‹ <strong style={{ color: 'var(--text-primary)' }}>{m.date}</strong> ›
        </div>

        {/* summary */}
        <div className="mirror-card summary">
          <div className="mirror-card-title">종합 의견</div>
          <div className="mirror-card-body">{m.summary}</div>
        </div>

        {/* good */}
        <div className="detail-label" style={{ marginTop: 20, marginBottom: 8 }}>잘하고 있는 것</div>
        {m.good.map((item, i) => (
          <div className="mirror-card good" key={i}>
            <div className="mirror-card-title">{item.title}</div>
            <div className="mirror-card-body">{item.description}</div>
          </div>
        ))}

        {/* warning */}
        <div className="detail-label" style={{ marginTop: 20, marginBottom: 8 }}>주의해야 할 것</div>
        {m.warning.map((item, i) => (
          <div className="mirror-card warning" key={i}>
            <div className="mirror-card-title">{item.title}</div>
            <div className="mirror-card-body">{item.description}</div>
          </div>
        ))}

        {/* actions */}
        {m.actions && m.actions.length > 0 && (
          <>
            <div className="detail-label" style={{ marginTop: 20, marginBottom: 8 }}>액션 아이템 제안</div>
            <ol className="action-items">
              {m.actions.map((a, i) => <li key={i}>{a}</li>)}
            </ol>
          </>
        )}

        {/* conversations */}
        <div className="detail-label" style={{ marginTop: 20, marginBottom: 8 }}>대화 내역 {m.conversations.length}건</div>
        {m.conversations.map((c, i) => (
          <div className="convo-item" key={i} onClick={() => onNavigate('chat')}>
            {c.hasUnread && <div className="unread-dot" />}
            <div className="convo-title">{c.title} ✎</div>
            <div className="convo-date">{c.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
