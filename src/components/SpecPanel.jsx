import { useState } from 'react';
import { specs } from '../data/mock-data';

const strategySpecs = [
  specs.valueProposition,
  {
    title: '배포 전략',
    sections: specs.settings.sections.filter(s =>
      s.element.includes('배포') || s.element.includes('콜드스타트')
    ),
  },
];

function SpecSections({ sections }) {
  return sections.map((section, i) => (
    <div className="spec-section" key={i}>
      <h3>{section.element}</h3>

      {section.dataSource && (
        <div className="spec-row">
          <span className="spec-label">데이터 소스</span>
          <span className="spec-value">{section.dataSource}</span>
        </div>
      )}

      {section.refreshCycle && (
        <div className="spec-row">
          <span className="spec-label">갱신 주기</span>
          <span className="spec-value">{section.refreshCycle}</span>
        </div>
      )}

      {section.decisions?.length > 0 && (
        <div style={{ marginTop: 8 }}>
          <span className="spec-label">결정됨</span>
          <ul className="spec-list decisions">
            {section.decisions.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </div>
      )}

      {section.status?.length > 0 && (
        <div style={{ marginTop: 8 }}>
          <span className="spec-label">진행 상황</span>
          <ul className="spec-list status">
            {section.status.map((s, j) => <li key={j}>{s}</li>)}
          </ul>
        </div>
      )}

      {section.open?.length > 0 && (
        <div style={{ marginTop: 8 }}>
          <span className="spec-label">미결정</span>
          <ul className="spec-list open">
            {section.open.map((o, j) => <li key={j}>{o}</li>)}
          </ul>
        </div>
      )}
    </div>
  ));
}

function IATab() {
  // diagram 1: structure
  const s = { w: 480, bw: 90, bh: 32 };
  const sx = [55, 165, 275, 385]; // 4 columns
  const cx = s.w / 2;

  // diagram 2: flows
  const f = { w: 480, bw: 110, bh: 32 };
  const flowNodes = {
    signal: { x: 60, y: 40 },
    topic: { x: 240, y: 40 },
    feedback: { x: 420, y: 40 },
    chat: { x: 240, y: 130 },
  };

  return (
    <>
      <h2>화면 구조</h2>
      <svg viewBox={`0 0 ${s.w} 200`} style={{ width: '100%', marginTop: 12, background: '#fafafa', borderRadius: 8, padding: 8 }}>
        {/* root */}
        <rect x={cx - 60} y={10} width={120} height={s.bh} rx={5} fill="#1a1a2e" />
        <text x={cx} y={28} textAnchor="middle" fill="#fff" fontSize={12} fontWeight={600}>flex CEO</text>

        {/* lines to level 1 */}
        {sx.map((x, i) => <line key={i} x1={cx} y1={42} x2={x} y2={75} stroke="#bbb" strokeWidth={1} />)}
        {/* line to topic */}
        <line x1={cx} y1={42} x2={cx} y2={120} stroke="#bbb" strokeWidth={1} />
        {/* line to chat */}
        <line x1={cx} y1={42} x2={cx} y2={175} stroke="#bbb" strokeWidth={1} />

        {/* level 1 */}
        {['시그널', '캘린더', '음성 기록', '리더십 피드백'].map((t, i) => (
          <g key={t}>
            <rect x={sx[i] - s.bw/2} y={75} width={s.bw} height={s.bh} rx={5} fill="#f0f0f2" stroke="#ccc" strokeWidth={1} />
            <text x={sx[i]} y={93} textAnchor="middle" fill="#1a1a2e" fontSize={11} fontWeight={600}>{t}</text>
          </g>
        ))}

        {/* topic */}
        <rect x={cx - s.bw/2} y={120} width={s.bw} height={s.bh} rx={5} fill="#e8e8f0" stroke="#9EA0B8" strokeWidth={1} />
        <text x={cx} y={138} textAnchor="middle" fill="#1a1a2e" fontSize={11} fontWeight={600}>토픽</text>

        {/* topic children lines */}
        <line x1={cx} y1={152} x2={cx - 55} y2={162} stroke="#bbb" strokeWidth={1} />
        <line x1={cx} y1={152} x2={cx + 55} y2={162} stroke="#bbb" strokeWidth={1} />
        {[['토픽 보관함', cx - 55], ['토픽 등록', cx + 55]].map(([t, x]) => (
          <g key={t}>
            <rect x={x - 45} y={162} width={90} height={28} rx={4} fill="#f5f5f7" stroke="#ddd" strokeWidth={1} />
            <text x={x} y={178} textAnchor="middle" fill="#444" fontSize={10} fontWeight={500}>{t}</text>
          </g>
        ))}

        {/* chat */}
        <rect x={cx - s.bw/2 - 5} y={75 + s.bh * 3 + 8} width={s.bw + 10} height={s.bh} rx={5} fill="#e8e8f0" stroke="#9EA0B8" strokeWidth={1} />
        <text x={cx} y={75 + s.bh * 3 + 26} textAnchor="middle" fill="#1a1a2e" fontSize={11} fontWeight={600}>채팅</text>
      </svg>

      <h2 style={{ marginTop: 24 }}>주요 전환 동선</h2>
      <svg viewBox={`0 0 ${f.w} 170`} style={{ width: '100%', marginTop: 12, background: '#fafafa', borderRadius: 8, padding: 8 }}>
        <defs>
          <marker id="fa" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,1 L7,4 L0,7" fill="none" stroke="#9EA0B8" strokeWidth={1.2} />
          </marker>
        </defs>

        {/* nodes */}
        {[
          { id: 'signal', label: '시그널' },
          { id: 'topic', label: '토픽' },
          { id: 'feedback', label: '리더십 피드백' },
        ].map(n => (
          <g key={n.id}>
            <rect x={flowNodes[n.id].x - f.bw/2} y={flowNodes[n.id].y - f.bh/2} width={f.bw} height={f.bh} rx={5} fill="#f0f0f2" stroke="#ccc" strokeWidth={1} />
            <text x={flowNodes[n.id].x} y={flowNodes[n.id].y + 1} textAnchor="middle" dominantBaseline="middle" fill="#1a1a2e" fontSize={11} fontWeight={600}>{n.label}</text>
          </g>
        ))}
        <g>
          <rect x={flowNodes.chat.x - f.bw/2} y={flowNodes.chat.y - f.bh/2} width={f.bw} height={f.bh} rx={5} fill="#e8e8f0" stroke="#9EA0B8" strokeWidth={1} />
          <text x={flowNodes.chat.x} y={flowNodes.chat.y + 1} textAnchor="middle" dominantBaseline="middle" fill="#1a1a2e" fontSize={11} fontWeight={600}>채팅</text>
        </g>

        {/* 시그널 → 토픽 */}
        <line x1={flowNodes.signal.x + f.bw/2} y1={flowNodes.signal.y} x2={flowNodes.topic.x - f.bw/2} y2={flowNodes.topic.y} stroke="#9EA0B8" strokeWidth={1.5} markerEnd="url(#fa)" />
        <text x={(flowNodes.signal.x + flowNodes.topic.x) / 2} y={flowNodes.signal.y - 10} textAnchor="middle" fill="#888" fontSize={10}>토픽 생성</text>

        {/* 시그널 → 채팅 */}
        <line x1={flowNodes.signal.x} y1={flowNodes.signal.y + f.bh/2} x2={flowNodes.chat.x - f.bw/2} y2={flowNodes.chat.y} stroke="#9EA0B8" strokeWidth={1.5} markerEnd="url(#fa)" />
        <text x={flowNodes.signal.x - 15} y={(flowNodes.signal.y + flowNodes.chat.y) / 2 + 14} textAnchor="middle" fill="#888" fontSize={10}>이 주제로 대화</text>

        {/* 토픽 → 채팅 */}
        <line x1={flowNodes.topic.x} y1={flowNodes.topic.y + f.bh/2} x2={flowNodes.chat.x} y2={flowNodes.chat.y - f.bh/2} stroke="#9EA0B8" strokeWidth={1.5} markerEnd="url(#fa)" />
        <text x={flowNodes.topic.x + 60} y={(flowNodes.topic.y + flowNodes.chat.y) / 2 + 5} textAnchor="middle" fill="#888" fontSize={10}>이 주제로 대화</text>

        {/* 피드백 → 채팅 */}
        <line x1={flowNodes.feedback.x} y1={flowNodes.feedback.y + f.bh/2} x2={flowNodes.chat.x + f.bw/2} y2={flowNodes.chat.y} stroke="#9EA0B8" strokeWidth={1.5} markerEnd="url(#fa)" />
        <text x={flowNodes.feedback.x + 15} y={(flowNodes.feedback.y + flowNodes.chat.y) / 2 + 14} textAnchor="middle" fill="#888" fontSize={10}>이 피드백으로 대화</text>
      </svg>
    </>
  );
}

export default function SpecPanel({ screenSpec }) {
  const [tab, setTab] = useState('screen');

  return (
    <div className="spec-panel">
      <div className="spec-tabs">
        <button
          className={`spec-tab ${tab === 'screen' ? 'active' : ''}`}
          onClick={() => setTab('screen')}
        >
          화면 스펙
        </button>
        <button
          className={`spec-tab ${tab === 'ia' ? 'active' : ''}`}
          onClick={() => setTab('ia')}
        >
          IA
        </button>
        <button
          className={`spec-tab ${tab === 'strategy' ? 'active' : ''}`}
          onClick={() => setTab('strategy')}
        >
          논의 안건
        </button>
      </div>

      {tab === 'screen' && (
        screenSpec ? (
          <>
            <h2>{screenSpec.title}</h2>
            <SpecSections sections={screenSpec.sections} />
          </>
        ) : (
          <>
            <h2>화면 스펙</h2>
            <p style={{ color: '#888', fontSize: 14 }}>
              왼쪽 화면을 탐색하면 해당 화면의 스펙이 여기에 표시됩니다.
            </p>
          </>
        )
      )}

      {tab === 'ia' && (
        <IATab />
      )}

      {tab === 'strategy' && (
        <>
          {strategySpecs.map((spec, i) => (
            <div key={i}>
              <h2>{spec.title}</h2>
              <SpecSections sections={spec.sections} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
