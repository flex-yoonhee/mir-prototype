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

        {/* actions */}
        {signal.actions && (
          <>
            <div className="detail-label" style={{ marginTop: 16 }}>액션 아이템 제안</div>
            <ol className="action-list">
              {signal.actions.map((a, i) => <li key={i}>{i + 1}. {a}</li>)}
            </ol>
          </>
        )}

        {/* related people */}
        {signal.relatedPeople && (
          <>
            <div className="divider" />
            <div className="detail-label">관련 인물</div>
            <div className="related-people">
              {signal.relatedPeople.map((p, i) => (
                <div className="person-chip" key={i}>
                  {p.type === 'person'
                    ? <div className="avatar-sm">{p.name[0]}</div>
                    : <div className="org-icon">⊞</div>
                  }
                  {p.name}
                </div>
              ))}
            </div>
          </>
        )}

        <button className="signal-card-action" style={{ marginTop: 24 }}>토픽 다시 생성</button>
        <button
          className="signal-card-action"
          style={{ background: 'var(--accent)', color: 'var(--bg)', border: 'none' }}
          onClick={() => onNavigate('chat')}
        >
          이 주제로 대화
        </button>
      </div>
    </div>
  );
}
