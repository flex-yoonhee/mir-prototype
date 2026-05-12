import ScreenHeader from '../components/ScreenHeader';
import { townhallPrep } from '../data/mock-data';

export default function TownhallScreen({ onBack }) {
  const t = townhallPrep;

  return (
    <div className="screen">
      <ScreenHeader title={t.title} onBack={onBack} />

      <div className="detail-section">
        <div className="detail-label">AI 브리핑</div>
        <div className="detail-body" style={{ marginBottom: 24 }}>{t.aiBriefing}</div>

        {t.messages.map((msg, i) => (
          <div className="slack-message" key={i}>
            <div className="email-from">
              <div className="email-avatar" style={{ background: i === 0 ? '#7AB882' : i === 1 ? 'var(--accent)' : '#c44', fontSize: 11 }}>
                {msg.from[0]}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{msg.from}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{msg.date}</div>
              </div>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6, marginTop: 8 }}>{msg.content}</div>
            {msg.reactions && (
              <div className="slack-reactions">
                {Object.entries(msg.reactions).map(([emoji, count]) => {
                  const emojiMap = { heart: '❤️', sparkle: '✨', bolt: '⚡', party: '🥳' };
                  return (
                    <span className="slack-reaction" key={emoji}>
                      {emojiMap[emoji]} {count}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
