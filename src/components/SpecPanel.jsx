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
  const w = 540, bw = 100, bh = 34;
  const cx = w / 2;
  // y positions
  const y0 = 30;  // root
  const y1 = 110; // level 1
  const y2 = 240; // topic
  const y3 = 320; // topic children
  const y4 = 420; // chat
  // x positions for level 1: 4 boxes evenly
  const l1x = [60, 180, 300, 420];
  // topic children x
  const tcx = [cx - 70, cx + 70];

  const box = (x, y, text, style) => (
    <g key={text}>
      <rect x={x - bw/2} y={y - bh/2} width={bw} height={bh} rx={5}
        fill={style === 'root' ? '#1a1a2e' : style === 'accent' ? '#e4e4ec' : '#f0f0f2'}
        stroke={style === 'root' ? '#1a1a2e' : style === 'accent' ? '#9EA0B8' : '#ccc'}
        strokeWidth={1} />
      <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle"
        fill={style === 'root' ? '#fff' : '#1a1a2e'}
        fontSize={12} fontWeight={600}>{text}</text>
    </g>
  );

  const arrow = (x1, y1a, x2, y2a) => (
    <line x1={x1} y1={y1a} x2={x2} y2={y2a} stroke="#aaa" strokeWidth={1} markerEnd="url(#ah)" />
  );

  const label = (x, y, text) => (
    <text x={x} y={y} textAnchor="middle" fontSize={10} fill="#888">{text}</text>
  );

  return (
    <>
      <h2>정보 구조 (IA)</h2>
      <svg viewBox={`0 0 ${w} ${y4 + 30}`} style={{ width: '100%', marginTop: 16 }}>
        <defs>
          <marker id="ah" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="#aaa" strokeWidth={1} />
          </marker>
          <marker id="ah-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="#9EA0B8" strokeWidth={1} />
          </marker>
        </defs>

        {/* root → level 1 lines */}
        {l1x.map(x => arrow(cx, y0 + bh/2, x, y1 - bh/2))}

        {/* root → topic */}
        {arrow(cx, y0 + bh/2, cx, y2 - bh/2)}

        {/* root → chat (far right, goes around) */}
        <path d={`M${cx + bw/2 + 5},${y0} L${w - 15},${y0} L${w - 15},${y4} L${cx + bw/2},${y4}`}
          fill="none" stroke="#aaa" strokeWidth={1} markerEnd="url(#ah)" />

        {/* topic → children */}
        {tcx.map(x => arrow(cx, y2 + bh/2, x, y3 - bh/2))}

        {/* 시그널 → 토픽 (토픽 생성) */}
        <path d={`M${l1x[0]},${y1 + bh/2} L${l1x[0]},${y2} L${cx - bw/2},${y2}`}
          fill="none" stroke="#9EA0B8" strokeWidth={1.5} markerEnd="url(#ah-blue)" />
        {label(l1x[0] - 5, y2 - 10, '토픽 생성')}

        {/* 시그널 → 채팅 (이 주제로 대화) */}
        <path d={`M${l1x[0] - bw/2 - 5},${y1} L${15},${y1} L${15},${y4} L${cx - bw/2},${y4}`}
          fill="none" stroke="#9EA0B8" strokeWidth={1.5} markerEnd="url(#ah-blue)" />
        {label(15, y1 + (y4 - y1) / 2, '이 주제로')}
        {label(15, y1 + (y4 - y1) / 2 + 14, '대화')}

        {/* 토픽 → 채팅 (이 주제로 대화) */}
        {(() => {
          const line = <line x1={cx} y1={y3 + bh/2 + 10} x2={cx} y2={y4 - bh/2}
            stroke="#9EA0B8" strokeWidth={1.5} markerEnd="url(#ah-blue)" />;
          return <>{line}{label(cx + 50, y3 + bh/2 + 35, '이 주제로 대화')}</>;
        })()}

        {/* 리더십 피드백 → 채팅 (이 피드백으로 대화) */}
        <path d={`M${l1x[3] + bw/2 + 5},${y1} L${w - 45},${y1} L${w - 45},${y4} L${cx + bw/2},${y4}`}
          fill="none" stroke="#9EA0B8" strokeWidth={1.5} markerEnd="url(#ah-blue)" />
        {label(w - 45, y1 + (y4 - y1) / 2 - 7, '이 피드백으로')}
        {label(w - 45, y1 + (y4 - y1) / 2 + 7, '대화')}

        {/* boxes (rendered last to be on top) */}
        {box(cx, y0, 'flex CEO', 'root')}
        {box(l1x[0], y1, '시그널', '')}
        {box(l1x[1], y1, '캘린더', '')}
        {box(l1x[2], y1, '음성 기록', '')}
        {box(l1x[3], y1, '리더십 피드백', '')}
        {box(cx, y2, '토픽', 'accent')}
        {box(tcx[0], y3, '토픽 보관함', 'sub')}
        {box(tcx[1], y3, '토픽 등록', 'sub')}
        {box(cx, y4, '채팅', 'accent')}
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
