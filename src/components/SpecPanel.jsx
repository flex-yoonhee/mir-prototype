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
  return (
    <>
      <h2>정보 구조 (IA)</h2>
      <div className="ia">
        {/* row 0: root */}
        <div className="ia-row">
          <div className="ia-box root">flex CEO</div>
        </div>
        <div className="ia-lines-down ia-lines-4" />

        {/* row 1: level 1 */}
        <div className="ia-row">
          <div className="ia-box">시그널</div>
          <div className="ia-box">캘린더</div>
          <div className="ia-box">음성 기록</div>
          <div className="ia-box">리더십 피드백</div>
        </div>

        {/* flow labels */}
        <div className="ia-flow-row">
          <div className="ia-flow-label left">
            <div className="ia-flow-line" />
            <span>토픽 생성</span>
          </div>
          <div className="ia-flow-label right">
            <span>이 피드백으로 대화</span>
            <div className="ia-flow-line" />
          </div>
        </div>

        {/* row 2: topic */}
        <div className="ia-row">
          <div className="ia-box accent">토픽</div>
        </div>
        <div className="ia-lines-down ia-lines-2" />

        {/* row 3: topic children */}
        <div className="ia-row">
          <div className="ia-box sub">토픽 보관함</div>
          <div className="ia-box sub">토픽 등록</div>
        </div>

        {/* flow to chat */}
        <div className="ia-flow-row">
          <div className="ia-flow-label center">
            <div className="ia-flow-line" />
            <span>이 주제로 대화</span>
            <div className="ia-flow-line" />
          </div>
        </div>

        {/* row 4: chat */}
        <div className="ia-row">
          <div className="ia-box accent">채팅</div>
        </div>
      </div>

      <div className="spec-section" style={{ marginTop: 24 }}>
        <h3>주요 전환 동선</h3>
        <ul className="spec-list decisions">
          <li>시그널 → 토픽 생성 → 토픽</li>
          <li>시그널 → 이 주제로 대화 → 채팅</li>
          <li>토픽 → 이 주제로 대화 → 채팅</li>
          <li>리더십 피드백 → 이 피드백으로 대화 → 채팅</li>
        </ul>
      </div>
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
