import { useState } from 'react';
import Tag from '../components/Tag';
import { todaysBrief, calendarEvents, homeTopics } from '../data/mock-data';

export default function HomeScreen({ onNavigate }) {
  const [scheduleTab, setScheduleTab] = useState('schedule');

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

      {/* 2. interest topics */}
      <div className="section">
        <div className="section-header">
          <div className="section-title-sm">✧ 관심 토픽 {homeTopics.length}</div>
          <button className="section-link" onClick={() => onNavigate('topics')}>모든 토픽</button>
        </div>
        {homeTopics.length === 0 ? (
          <div className="empty-state-inline">추적중인 토픽이 없습니다.</div>
        ) : (
          <div className="home-topic-list">
            {homeTopics.map((topic) => (
              <div className="home-topic-item" key={topic.id} onClick={() => onNavigate('topic-detail')}>
                <div className="home-topic-header">
                  <span className="home-topic-title">{topic.title}</span>
                  {topic.isNew && <span className="new-badge-green">NEW</span>}
                </div>
                <div className="home-topic-summary">{topic.lastUpdate}</div>
                <div className="topic-badges">
                  <span className="topic-badge detected">감지 {topic.stats.detected}건</span>
                  <span className="topic-badge tracking">추적 {topic.stats.tracking}건</span>
                  <span className="topic-badge closed">종료 {topic.stats.closed}건</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. today's schedule */}
      <div className="section">
        <div className="section-header">
          <div className="section-title-sm">오늘 일정 {calendarEvents.events.length}</div>
          <button className="section-link" onClick={() => onNavigate('calendar')}>캘린더</button>
        </div>

        <div className="schedule-card">
          {/* all day */}
          {calendarEvents.allDay.length > 0 && (
            <div className="sched-allday">
              <span className="sched-allday-label">종일</span>
              <div className="sched-allday-body">
                {calendarEvents.allDay.map((t, i) => (
                  <div className="sched-allday-title" key={i}>{t}</div>
                ))}
              </div>
            </div>
          )}

          {/* events */}
          {calendarEvents.events.length === 0 ? (
            <div className="empty-state-inline" style={{ padding: '24px 16px' }}>예정된 일정이 없습니다.</div>
          ) : (
            calendarEvents.events.map((ev, i) => (
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
            ))
          )}
        </div>

        {/* schedule / todo tabs */}
        <div className="focus-tab-bar">
          <span
            className={`focus-tab ${scheduleTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setScheduleTab('schedule')}
          >일정</span>
          <span className="focus-tab-dot">·</span>
          <span
            className={`focus-tab ${scheduleTab === 'todo' ? 'active' : ''}`}
            onClick={() => setScheduleTab('todo')}
          >할 일</span>
        </div>
      </div>

      {/* chat input bar */}
      <div className="chat-input-float">
        <div className="chat-input-float-inner">
          <input type="text" placeholder="어떤 도움이 필요하신가요?" readOnly onClick={() => onNavigate('chat')} />
          <button className="chat-send-btn-float" onClick={() => onNavigate('chat')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
