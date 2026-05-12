import ScreenHeader from '../components/ScreenHeader';
import { meetingDetail } from '../data/mock-data';

export default function MeetingDetailScreen({ onBack }) {
  const m = meetingDetail;

  return (
    <div className="screen">
      <ScreenHeader title="일정 상세" onBack={onBack} />

      <div className="meeting-info">
        <h2 className="meeting-title">{m.title}</h2>
        <div className="meeting-date">{m.date} · {m.time} · {m.duration}</div>

        <div style={{ marginTop: 16 }}>
          <div className="meeting-meta-item">
            <span className="icon">👤</span>
            {m.attendees.map(a => a.name).join(', ')}
          </div>
          <div className="meeting-meta-item">
            <span className="icon">📍</span>
            {m.location}
          </div>
          <div className="meeting-meta-item">
            <span className="icon">🔗</span>
            <a className="zoom-link" href="#">{m.zoomLink}</a>
            <span className="zoom-join" style={{ marginLeft: 'auto' }}>참여</span>
          </div>
        </div>
      </div>

      <div className="meeting-note">
        <span style={{ marginRight: 6 }}>📋</span>
        {m.note}
      </div>

      {/* meeting coach */}
      <div className="coach-section">
        <div className="section-title" style={{ marginBottom: 16 }}>
          <span className="icon">✦</span> 미팅 코치
        </div>

        <div className="coach-card">
          <div className="coach-card-title" style={{ color: 'var(--tag-urgent-text)' }}>대화 전략</div>
          <div className="coach-card-body">{m.coach.strategy}</div>
        </div>

        <div className="coach-card">
          <div className="coach-card-title">대화 소재</div>
          <ol className="coach-list numbered">
            {m.coach.topics.map((t, i) => <li key={i}>{t}</li>)}
          </ol>
        </div>

        <div className="coach-card">
          <div className="coach-card-title">사전 준비</div>
          <ul className="coach-list bulleted">
            {m.coach.preparation.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
