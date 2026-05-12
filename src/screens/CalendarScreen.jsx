import { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import { calendarEvents } from '../data/mock-data';

const weekDays = [
  { day: '일', date: 12, dots: 1 },
  { day: '월', date: 13, dots: 2 },
  { day: '화', date: 14, dots: 0 },
  { day: '수', date: 15, dots: 4, today: true },
  { day: '목', date: 16, dots: 1, highlight: true },
  { day: '금', date: 17, dots: 0, weekend: true },
  { day: '토', date: 18, dots: 2 },
];

export default function CalendarScreen({ onNavigate, onBack }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="screen">
      <ScreenHeader
        title="2026. 5"
        onBack={onBack}
        rightActions={<button className="screen-header-btn" style={{ fontSize: 13 }}>오늘</button>}
      />

      {/* week strip */}
      <div className="week-strip">
        {weekDays.map((d, i) => (
          <div
            key={i}
            className={`week-day ${d.today ? 'today' : ''} ${d.highlight ? 'selected' : ''}`}
            onClick={() => setExpanded(!expanded)}
          >
            <span style={{ fontSize: 11 }}>{d.day}</span>
            <span style={{ fontWeight: 600 }}>{d.date}</span>
            <div className="dots">
              {Array.from({ length: Math.min(d.dots, 4) }).map((_, j) => (
                <div className="dot-sm" key={j} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* all day events */}
      {calendarEvents.allDay.length > 0 && (
        <div className="section" style={{ marginTop: 8 }}>
          <div className="all-day-section">
            <span className="all-day-label">종일</span>
            {calendarEvents.allDay.map((title, i) => (
              <div className="all-day-title" key={i}>{title}</div>
            ))}
            <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>하루 종일 이벤트</div>
          </div>
        </div>
      )}

      {/* event list */}
      <div className="section">
        <div className="section-header">
          <div className="section-title">오늘 일정 {calendarEvents.events.length}</div>
          <button className="section-link" onClick={() => setExpanded(!expanded)}>캘린더</button>
        </div>
        {calendarEvents.events.map((event, i) => (
          <div
            className={`schedule-item ${event.conflict ? 'conflict' : ''}`}
            key={i}
            onClick={() => onNavigate('meeting-detail')}
          >
            <div className="schedule-time">
              <span>{event.time}</span>
              <span className="schedule-time-end">{event.endTime}</span>
            </div>
            <div className="schedule-divider" />
            <div className="schedule-content">
              <div className="schedule-title">
                {event.title}
                <span className="duration-badge">{event.duration}</span>
              </div>
              <div className="schedule-subtitle">
                {event.location && `${event.location} · `}{event.attendees}명
              </div>
              {event.conflict && <div className="conflict-badge">일정 충돌</div>}
            </div>
            {event.avatar && <div className="avatar" />}
          </div>
        ))}
      </div>
    </div>
  );
}
