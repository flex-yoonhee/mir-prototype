import { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import { voiceDetail } from '../data/mock-data';

export default function VoiceDetailScreen({ onBack }) {
  const d = voiceDetail;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = [
      d.title,
      `${d.date} · ${d.timeRange}`,
      '',
      '회의 개요',
      d.aiSummary.overview,
      '',
      '회의 참여자',
      d.aiSummary.participants,
      '',
      '주요 내용',
      ...d.aiSummary.keyTopics.flatMap(t => [
        t.title,
        ...t.items.map(item => `· ${item}`),
        '',
      ]),
      '결정 사항',
      ...d.aiSummary.decisions.map(item => `· ${item}`),
      '',
      '미결 사항',
      ...d.aiSummary.openItems.map(item => `· ${item}`),
    ].join('\n');
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="screen">
      <ScreenHeader title="음성 메모 정보" onBack={onBack} />

      <div className="detail-section">
        {/* title + date */}
        <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.4, marginBottom: 4 }}>
          {d.title}
        </h2>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 16 }}>
          {d.date} · {d.timeRange}
        </div>

        {/* meta */}
        <div className="voice-detail-meta">
          <div className="voice-detail-meta-row">
            <span className="voice-detail-icon">👤</span>
            <div className="voice-detail-attendees">
              {d.attendees.map((a, i) => (
                <span className="voice-detail-attendee" key={i}>
                  <span className="avatar-sm">{a.avatar}</span>
                  {a.name}
                </span>
              ))}
            </div>
          </div>
          <div className="voice-detail-meta-row">
            <span className="voice-detail-icon">📍</span>
            <span>{d.location}</span>
          </div>
          <div className="voice-detail-meta-row">
            <span className="voice-detail-icon">📋</span>
            <span>{d.note}</span>
          </div>
        </div>

        {/* AI summary */}
        <div className="detail-label" style={{ marginTop: 24, marginBottom: 12 }}>
          ✦ AI 요약
        </div>

        <div className="voice-summary-section">
          <div className="voice-summary-label">회의 개요</div>
          <div className="voice-summary-body">{d.aiSummary.overview}</div>
        </div>

        <div className="voice-summary-section">
          <div className="voice-summary-label">회의 참여자</div>
          <div className="voice-summary-body">{d.aiSummary.participants}</div>
        </div>

        {d.aiSummary.keyTopics.map((topic, i) => (
          <div className="voice-summary-section" key={i}>
            {i === 0 && <div className="voice-summary-label">주요 내용</div>}
            <div className="voice-summary-subtitle">{topic.title}</div>
            <ul className="voice-summary-list">
              {topic.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        ))}

        <div className="voice-summary-section">
          <div className="voice-summary-label">결정 사항</div>
          <ul className="voice-summary-list">
            {d.aiSummary.decisions.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className="voice-summary-section">
          <div className="voice-summary-label">미결 사항</div>
          <ul className="voice-summary-list">
            {d.aiSummary.openItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* copy button */}
        <button
          className="signal-card-action"
          style={{ marginTop: 24, background: 'var(--surface)' }}
          onClick={handleCopy}
        >
          {copied ? '복사됨' : '📋 복사하기'}
        </button>
      </div>
    </div>
  );
}
