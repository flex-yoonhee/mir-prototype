import { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { specs } from '../data/mock-data';

mermaid.initialize({ startOnLoad: false, theme: 'default' });

const iaDiagram = `graph TB
    A[flex CEO]
    A --> B[시그널]
    A --> C[토픽]
    A --> D[캘린더]
    A --> E[채팅]
    A --> F[음성 기록]
    A --> G[리더십 피드백]

    C --> C1[토픽 보관함]
    C --> C2[토픽 등록]

    B -->|토픽 생성| C
    B -->|이 주제로 대화| E
    C -->|이 주제로 대화| E
    G -->|이 피드백으로 대화| E`;

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
  const ref = useRef(null);

  useEffect(() => {
    const render = async () => {
      if (!ref.current) return;
      const id = 'ia-mermaid-' + Date.now();
      try {
        const { svg } = await mermaid.render(id, iaDiagram);
        ref.current.innerHTML = svg;
      } catch (e) {
        ref.current.innerHTML = '<p style="color:red">다이어그램 렌더링 실패</p>';
      }
    };
    render();
  }, []);

  return (
    <>
      <h2>정보 구조 (IA)</h2>
      <div ref={ref} style={{ marginTop: 16 }} />
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
