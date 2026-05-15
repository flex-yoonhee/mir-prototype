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
        <>
          <h2>정보 구조 (IA)</h2>
          <div className="ia-diagram">
            <div className="ia-root">flex CEO</div>
            <div className="ia-level1">
              {[
                { name: '시그널', children: [], flows: ['토픽 생성 → 토픽', '이 주제로 대화 → 채팅'] },
                { name: '토픽', children: ['토픽 보관함', '토픽 등록'], flows: ['이 주제로 대화 → 채팅'] },
                { name: '캘린더', children: [], flows: [] },
                { name: '채팅', children: [], flows: [] },
                { name: '음성 기록', children: [], flows: [] },
                { name: '리더십 피드백', children: [], flows: ['이 피드백으로 대화 → 채팅'] },
              ].map((item, i) => (
                <div className="ia-node-group" key={i}>
                  <div className="ia-node">{item.name}</div>
                  {item.children.length > 0 && (
                    <div className="ia-children">
                      {item.children.map((c, j) => (
                        <div className="ia-child" key={j}>{c}</div>
                      ))}
                    </div>
                  )}
                  {item.flows.length > 0 && (
                    <div className="ia-flows">
                      {item.flows.map((f, j) => (
                        <div className="ia-flow" key={j}>{f}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="spec-section" style={{ marginTop: 24 }}>
            <h3>주요 전환 동선</h3>
            <ul className="spec-list decisions">
              <li>시그널 → 토픽 생성</li>
              <li>시그널 → 이 주제로 대화 → 채팅</li>
              <li>토픽 → 이 주제로 대화 → 채팅</li>
              <li>리더십 피드백 → 이 피드백으로 대화 → 채팅</li>
            </ul>
          </div>
        </>
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
