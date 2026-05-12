import Tag from '../components/Tag';
import { todaysBrief, calendarEvents } from '../data/mock-data';

const trackingTopics = {
  urgent: {
    label: '긴급 5',
    severity: 'urgent',
    items: [
      { text: '개발팀 시니어 이탈 징후', dot: true },
      { text: 'PM팀 번아웃 감지' },
      { text: 'Product Designer 채용...' },
    ],
  },
  caution: {
    label: '주의 4',
    severity: 'caution',
    items: [
      { text: '디자인 팀 보상 격차' },
      { text: '개발팀 시니어 이탈 징후' },
      { text: 'PM팀 업무 만족도 하락' },
    ],
  },
};

export default function HomeScreen({ onNavigate }) {
  return (
    <div className="screen">
      {/* header */}
      <div className="home-header-v2">
        <div className="home-header-left" onClick={() => onNavigate('settings')}>
          <div className="home-avatar" />
          <span className="home-chevron">›</span>
        </div>
        <button className="home-signal-btn" onClick={() => onNavigate('signals')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 12h4l3-9 6 18 3-9h4" />
          </svg>
        </button>
      </div>

      {/* 1. today's brief */}
      <div className="section">
        <div className="section-title-sm">✦ 오늘의 요약</div>
        <div className="brief-card-v2">
          <div className="brief-date-v2">
            <span className="brief-date-num">{todaysBrief.date}</span>
            <div className="brief-date-info">
              <span className="brief-day">{todaysBrief.dayOfWeek}</span>
              <span className="brief-update">{todaysBrief.updateTime}</span>
            </div>
          </div>
          <p className="brief-body">{todaysBrief.summary}</p>

          <div className="brief-signal-title">새로운 시그널</div>
          {todaysBrief.signals.map((s, i) => (
            <div className="brief-signal-row" key={i} onClick={() => onNavigate('signal-detail')}>
              <div className={`sdot ${s.severity}`} />
              <span>{s.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. tracking topics */}
      <div className="section">
        <div className="section-header">
          <div className="section-title-sm">✧ 추적중 토픽 9</div>
          <button className="section-link" onClick={() => onNavigate('topics')}>모든 토픽</button>
        </div>
        <div className="topic-grid">
          {Object.values(trackingTopics).map((group, gi) => (
            <div className="topic-grid-col" key={gi}>
              <Tag severity={group.severity}>{group.label}</Tag>
              {group.items.map((item, i) => (
                <div className="topic-grid-row" key={i} onClick={() => onNavigate('topic-detail')}>
                  {item.dot && <span className="topic-dot">·</span>}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. today's schedule */}
      <div className="section">
        <div className="section-header">
          <div className="section-title-sm">📅 오늘 일정 {calendarEvents.events.length}</div>
          <button className="section-link" onClick={() => onNavigate('calendar')}>캘린더</button>
        </div>

        <div className="schedule-card">
          {/* all day */}
          <div className="sched-allday">
            <span className="sched-allday-label">종일</span>
            <div className="sched-allday-body">
              {calendarEvents.allDay.map((t, i) => (
                <div className="sched-allday-title" key={i}>{t}</div>
              ))}
              <div className="sched-allday-sub">하루 종일 이벤트</div>
            </div>
          </div>

          {/* events */}
          {calendarEvents.events.map((ev, i) => (
            <div
              className={`sched-row ${ev.conflict ? 'sched-conflict' : ''}`}
              key={i}
              onClick={() => onNavigate('meeting-detail')}
            >
              <div className="sched-time">
                <span className="sched-time-start">{ev.time}</span>
                <span className="sched-time-end">{ev.endTime}</span>
              </div>
              <div className="sched-bar" />
              <div className="sched-info">
                <div className="sched-title">
                  <strong>{ev.title}</strong>
                  <span className="sched-dur">{ev.duration}</span>
                </div>
                <div className="sched-sub">
                  {ev.location && `${ev.location} · `}{ev.attendees}명
                </div>
                {ev.conflict && <div className="sched-conflict-label">일정 충돌</div>}
              </div>
              {ev.avatar && <div className="sched-avatar" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
