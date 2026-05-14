import ScreenHeader from '../components/ScreenHeader';
import Tag from '../components/Tag';
import { signals } from '../data/mock-data';

export default function SignalDetailScreen({ onNavigate, onBack, data }) {
  const signal = data || signals[0];

  return (
    <div className="screen">
      <ScreenHeader title="시그널 정보" onBack={onBack} />

      <div className="detail-section">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <Tag severity={signal.severity} />
          <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{signal.date}</span>
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.4, marginBottom: 16 }}>
          {signal.titleNote || signal.title}
        </h2>

        {/* AI briefing */}
        <div className="detail-label">AI 브리핑</div>
        <div className="detail-body" style={{ marginBottom: 24 }}>
          {signal.fullBriefing || signal.briefing}
        </div>

        {/* evidence */}
        {signal.evidence && (
          <>
            <div className="detail-label">포착 징후</div>
            {signal.evidence.map((ev, i) => (
              <div className="evidence-item" key={i}>
                <div className="evidence-label">{ev.label}</div>
                <ul className="evidence-sub">
                  {ev.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </>
        )}

        {/* action items */}
        {signal.actions && signal.actions.length > 0 && (
          <>
            <div className="detail-label" style={{ marginTop: 16 }}>액션 아이템 제안</div>
            <ol className="action-items">
              {signal.actions.map((a, i) => <li key={i}>{a}</li>)}
            </ol>
          </>
        )}
        {signal.actionItems && signal.actionItems.length > 0 && !signal.actions && (
          <>
            <div className="detail-label" style={{ marginTop: 16 }}>액션 아이템 제안</div>
            <ol className="action-items">
              {signal.actionItems.map((a, i) => <li key={i}>{a}</li>)}
            </ol>
          </>
        )}

        {/* related people */}
        {signal.relatedPeople && signal.relatedPeople.length > 0 && (
          <>
            <div className="divider" />
            <div className="detail-label">관련 인물</div>
            <div className="related-people">
              {signal.relatedPeople.map((p, i) => (
                p.type === 'person' ? (
                  <div className="person-chip" key={i}>
                    <div className="avatar-sm">{p.avatar || p.name[0]}</div>
                    {p.name}
                  </div>
                ) : (
                  <div className="org-chip" key={i}>
                    <div className="org-icon">&#x229e;</div>
                    {p.name}
                  </div>
                )
              ))}
            </div>
          </>
        )}

        {/* buttons */}
        <button className="signal-card-action" style={{ marginTop: 24, background: 'var(--surface)' }}>
          새로운 토픽 생성
        </button>
        <button
          className="signal-card-action"
          style={{ background: 'var(--accent)', color: 'var(--bg)', border: 'none' }}
          onClick={() => onNavigate('chat')}
        >
          이 주제로 대화
        </button>

        {/* conversations */}
        {signal.conversations && signal.conversations.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div className="detail-label">대화 {signal.conversations.length}</div>
              <button className="section-link" onClick={() => onNavigate('chat')}>+ 새 대화</button>
            </div>
            <div className="conversation-list">
              {signal.conversations.map((c, i) => (
                <div className="convo-item" key={i} onClick={() => onNavigate('chat')}>
                  {c.hasUnread && <div className="unread-dot" />}
                  <div className="convo-title">{c.title}</div>
                  <div className="convo-date">{c.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
