import { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import BottomSheet from '../components/BottomSheet';
import Tag from '../components/Tag';
import { topicDetail } from '../data/mock-data';

export default function TopicDetailScreen({ onNavigate, onBack }) {
  const d = topicDetail;
  const [expandedTimeline, setExpandedTimeline] = useState(0);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="screen">
      <ScreenHeader
        title="토픽 정보"
        onBack={onBack}
        rightActions={
          <button className="screen-header-btn" style={{ fontSize: 12 }} onClick={() => setShowEdit(true)}>제목 변경</button>
        }
      />

      <div className="detail-section">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <Tag severity={d.severity} />
          <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{d.daysAgo}일 경과</span>
        </div>
        <h2 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.4, marginBottom: 16 }}>
          {d.title}
        </h2>

        {/* timeline */}
        <div style={{ marginBottom: 24 }}>
          {d.timeline.map((t, i) => (
            <div className="timeline-item" key={i}>
              <div className={`timeline-dot ${t.severity}`} />
              <div className="timeline-header" onClick={() => setExpandedTimeline(expandedTimeline === i ? -1 : i)}>
                <div>
                  <span className="timeline-date">
                    <Tag severity={t.severity} /> {t.date}
                  </span>
                  {t.change && <span className="timeline-change" style={{ marginLeft: 8 }}>{t.change}</span>}
                </div>
                <span style={{ color: 'var(--text-secondary)' }}>{expandedTimeline === i ? '∧' : '∨'}</span>
              </div>
              {expandedTimeline === i && (
                <div className="timeline-content">
                  <div style={{ marginBottom: 8 }}>
                    <div className="detail-label">AI 브리핑</div>
                    <div>{d.briefing}</div>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <div className="detail-label">포착 징후</div>
                    {d.evidence.map((ev, j) => (
                      <div key={j} style={{ marginBottom: 4 }}>
                        <div style={{ fontWeight: 600 }}>{ev.label}</div>
                        <ul className="evidence-sub">
                          {ev.items.map((item, k) => <li key={k}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="detail-label">액션 아이템 제안</div>
                    <ol className="action-list">
                      {d.actions.map((a, j) => <li key={j}>{j + 1}. {a}</li>)}
                    </ol>
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <div className="detail-label">관련 인물</div>
                    <div className="related-people">
                      {d.relatedPeople.map((p, j) => (
                        <div className="person-chip" key={j}>
                          {p.type === 'person'
                            ? <div className="avatar-sm">{p.name[0]}</div>
                            : <div className="org-icon">⊞</div>
                          }
                          {p.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="signal-card-action">종료</button>
        <button
          className="signal-card-action"
          style={{ background: 'var(--accent)', color: 'var(--bg)', border: 'none' }}
          onClick={() => onNavigate('chat')}
        >
          이 주제로 대화
        </button>

        {/* conversations */}
        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div className="detail-label">대화 {d.conversations.length}</div>
            <button className="section-link">+ 새 대화</button>
          </div>
          {d.conversations.map((c, i) => (
            <div className="convo-item" key={i} onClick={() => onNavigate('chat')}>
              {c.hasUnread && <div className="unread-dot" />}
              <div className="convo-title">{c.title} ✎</div>
              <div className="convo-date">{c.date}</div>
            </div>
          ))}
        </div>

        {/* tasks */}
        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div className="detail-label">할 일 {d.tasks.length}</div>
            <button className="section-link">+ 새 할 일</button>
          </div>
          {d.tasks.map((t, i) => (
            <div className="task-item" key={i}>
              <div className={`task-checkbox ${t.done ? 'done' : ''}`}>
                {t.done && '✓'}
              </div>
              <div className="task-info">
                <div className="task-title">{t.title}</div>
                <div className="task-deadline">
                  <Tag severity={t.severity}>{t.deadline}</Tag>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* schedules */}
        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div className="detail-label">일정 {d.schedules.length}</div>
            <button className="section-link">+ 새 일정</button>
          </div>
          {d.schedules.map((s, i) => (
            <div className="schedule-item" key={i} onClick={() => onNavigate('meeting-detail')}>
              <div className="schedule-content">
                <div className="schedule-title">
                  {s.title}
                  <span className="duration-badge">{s.duration}</span>
                </div>
                <div className="schedule-subtitle">{s.time} · {s.location} · {s.person}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* edit title bottom sheet */}
      <BottomSheet open={showEdit} onClose={() => setShowEdit(false)}>
        <h3>
          제목 수정
          <button className="bottom-sheet-close" onClick={() => setShowEdit(false)}>✕</button>
        </h3>
        <div className="severity-selector">
          {['urgent', 'caution', 'normal'].map(s => (
            <button
              key={s}
              className={`severity-option ${s} ${s === d.severity ? 'selected' : ''}`}
            >
              <Tag severity={s} />
            </button>
          ))}
        </div>
        <input
          type="text"
          className="sheet-textarea"
          defaultValue={d.title}
          style={{ minHeight: 'auto', padding: '12px 16px' }}
        />
        <button className="sheet-submit">수정하기</button>
      </BottomSheet>
    </div>
  );
}
