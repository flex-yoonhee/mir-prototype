import { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import { meetingDetail } from '../data/mock-data';

export default function MeetingDetailScreen({ onBack }) {
  const m = meetingDetail;
  const [rsvp, setRsvp] = useState('attend');
  const [copied, setCopied] = useState(false);
  const [summaryLoading] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const coachText = [
    m.coach.strategy,
    '',
    '대화 소재:',
    ...m.coach.topics.map((t, i) => `${i + 1}. ${t}`),
    '',
    '사전 준비:',
    ...m.coach.preparation.map((p) => `· ${p}`),
  ].join('\n');

  return (
    <div className="screen">
      <ScreenHeader title="일정 상세" onBack={onBack} />

      <div className="meeting-info">
        <h2 className="meeting-title">{m.title}</h2>
        <div className="meeting-date">{m.date} · {m.time} · {m.duration}</div>

        <div style={{ marginTop: 16 }}>
          {/* attendees with avatars */}
          <div className="meeting-meta-item">
            <span className="icon">👤</span>
            <div className="meeting-attendees-row">
              {m.attendees.map((a, i) => (
                <div className="meeting-attendee" key={i}>
                  <div className="meeting-attendee-avatar">{a.name[0]}</div>
                  <span>{a.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="meeting-meta-item">
            <span className="icon">📍</span>
            {m.location}
          </div>
          {/* google meet link */}
          <div className="meeting-meta-item">
            <span className="icon">🔗</span>
            <a className="meet-link" href="#" onClick={(e) => e.preventDefault()}>
              Google Meet 참여
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 4 }}>
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* note */}
      <div className="meeting-note">
        <span style={{ marginRight: 6 }}>📋</span>
        {m.note}
      </div>

      {/* rsvp buttons */}
      <div className="rsvp-section">
        <button
          className={`rsvp-btn ${rsvp === 'attend' ? 'active' : ''}`}
          onClick={() => setRsvp('attend')}
        >참석</button>
        <button
          className={`rsvp-btn ${rsvp === 'decline' ? 'active decline' : ''}`}
          onClick={() => setRsvp('decline')}
        >거절</button>
        <button
          className={`rsvp-btn ${rsvp === 'maybe' ? 'active maybe' : ''}`}
          onClick={() => setRsvp('maybe')}
        >미정</button>
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

        <button className="copy-btn" onClick={() => handleCopy(coachText)}>
          {copied ? '복사됨' : '복사하기'}
        </button>
      </div>

      {/* ai summary */}
      <div className="ai-summary-section">
        <div className="section-title" style={{ marginBottom: 16, padding: '0 var(--spacing-md)' }}>
          <span className="icon">✦</span> AI 요약
        </div>

        {summaryLoading ? (
          <div className="ai-summary-loading">
            <div className="ai-summary-spinner" />
            <span>미팅 요약 중. 요약이 완료되면, 말씀을 보내드립니다.</span>
          </div>
        ) : (
          <div className="ai-summary-content">
            <div className="ai-summary-card">
              <div className="ai-summary-label">회의 개요</div>
              <div className="ai-summary-body">
                김서준 시니어와의 리텐션 면담. 역할 확장 및 보상 조정에 대한 논의가 진행되었습니다.
              </div>
            </div>
            <div className="ai-summary-card">
              <div className="ai-summary-label">참여자</div>
              <div className="ai-summary-body">
                {m.attendees.map(a => a.name).join(', ')}
              </div>
            </div>
            <div className="ai-summary-card">
              <div className="ai-summary-label">주요 내용</div>
              <ul className="ai-summary-list">
                <li>현재 역할에 대한 만족도 확인 — 기술 리더십 확대 희망</li>
                <li>보상 수준 시장 대비 하위 25% 위치 공유</li>
                <li>역할 전환 가능 포지션(Tech Lead) 제안</li>
              </ul>
            </div>
            <div className="ai-summary-card">
              <div className="ai-summary-label">결정사항</div>
              <ul className="ai-summary-list">
                <li>보상 15% 조정안 CHRO와 협의 후 확정</li>
                <li>Tech Lead 역할 전환 6월부터 시범 운영</li>
              </ul>
            </div>
            <div className="ai-summary-card">
              <div className="ai-summary-label">미결사항</div>
              <ul className="ai-summary-list">
                <li>보상 조정 최종 승인 (CHRO 협의 필요)</li>
                <li>Tech Lead 직무기술서 업데이트</li>
              </ul>
            </div>
            <div className="ai-summary-card">
              <div className="ai-summary-label">해야할 일</div>
              <ul className="ai-summary-list">
                <li>CHRO와 보상 조율 미팅 일정 잡기</li>
                <li>김서준에게 역할 전환 일정 공유</li>
                <li>HR팀에 직무기술서 업데이트 요청</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
