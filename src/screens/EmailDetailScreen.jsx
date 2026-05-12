import ScreenHeader from '../components/ScreenHeader';
import Tag from '../components/Tag';
import { emailDetail } from '../data/mock-data';

export default function EmailDetailScreen({ onBack }) {
  const e = emailDetail;

  return (
    <div className="screen">
      <ScreenHeader title="메일 상세" onBack={onBack} />

      <div className="detail-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Tag severity={e.severity} />
        </div>
        <h2 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.4, marginBottom: 4 }}>{e.title}</h2>
        <Tag severity="tracking">{e.topicTag}</Tag>

        {/* AI briefing */}
        <div style={{ marginTop: 20 }}>
          <div className="detail-label">AI 브리핑</div>
          <div className="detail-body">{e.aiBriefing}</div>
        </div>

        {/* main email */}
        <div style={{ marginTop: 24 }}>
          <div className="email-from">
            <div className="email-avatar" style={{ background: 'var(--accent)' }}>{e.email.from[0]}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{e.email.from}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{e.email.date}</div>
            </div>
          </div>
          <div className="email-body">{e.email.content}</div>
        </div>

        {/* AI reply */}
        <div className="ai-reply-box" style={{ marginTop: 16, marginLeft: 0, marginRight: 0 }}>
          <div className="detail-label">AI 제안 답장</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 8 }}>
            To: {e.aiReply.to}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{e.aiReply.subject}</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{e.aiReply.content}</div>
          <button className="copy-btn">📋 복사하기</button>
        </div>

        {/* thread */}
        <div className="divider" style={{ marginTop: 24 }} />
        {e.thread.map((msg, i) => (
          <div className="email-thread-item" key={i} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="email-from">
              <div className="email-avatar" style={{ background: i === 2 ? '#c44' : 'var(--accent)', fontSize: 11 }}>
                {msg.from[0]}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{msg.from}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{msg.date}</div>
              </div>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', marginTop: 8 }}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
